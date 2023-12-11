import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../AircraftItem/AircraftItem.css";
import ItemHeader from "./ComponentsAircraftItem/ItemHeader";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../App/Header/Components_Header/Basket/Redux/actions";
import { aircrafts } from "../Components_Home/Catalog/CatalogComponents/ListOfAircrafts/ListOfAircrafts";

const AircraftItem = () => {
  const { model } = useParams();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedAircraft = aircrafts.find((aircraft) => aircraft.model.toLowerCase() === model.toLowerCase());

  const handleAddToCart = () => {
    if (selectedAircraft) {
      const { id, model, price, image } = selectedAircraft;
      dispatch(addToCart({ id, model, price, image }));
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="aircraft-item">
      <ItemHeader />
      <div className="Information">
        <div className="Pricing">
          <img src={selectedAircraft.image} alt={selectedAircraft.model} />
          <p className="Model">Model: {selectedAircraft.model.toUpperCase()}.</p>
          <p className="Price">Price: {selectedAircraft.price}$ millions</p>
        </div>
        <div className="Description">
          <p id="Description">Description: <br />{selectedAircraft.description}</p>
          <button className="AircraftButton" id="addToCartButton" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="Modal">
          <div className="ModalContent">
            <p>{`${selectedAircraft.model} added to cart!`}</p>
            <span className="CloseButton" onClick={closeModal}>
              &#10006;
            </span>
            <div className="NavigationButtons">
              <Link to="/catalog">
                <button className="AircraftButton">Back to Catalog</button>
              </Link>
              <Link to="/cart">
                <button className="AircraftButton">Go to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AircraftItem;
