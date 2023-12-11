import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../App/Header/Components_Header/Basket/Redux/actions';
import '../CatalogComponents/Item.css';
import F16 from '../ImagesForCarts/F16.png';
import IL from '../ImagesForCarts/IL.png';
import SU from '../ImagesForCarts/SU.png';
import MIG29 from '../ImagesForCarts/MIG29.png';

const Item = ({ id, model, price, description }) => {
  let imageSRC;
  switch (model.toLowerCase()) {
    case 'f16':
      imageSRC = F16;
      break;
    case 'il':
      imageSRC = IL;
      break;
    case 'su':
      imageSRC = SU;
      break;
    case 'mig29':
      imageSRC = MIG29;
      break;
  }

  return (
    <div className="Item">
      <Link to={`/aircraft/${model.toLowerCase()}`} style={{ textDecoration: 'none' }}>
        <img className="AircraftImage" src={imageSRC} alt={model} />
        <p className="Model">Model: {model}</p>
        <p className="Price">Price: {price}$ millions</p>
      </Link>
    </div>
  );
};

export default Item;
