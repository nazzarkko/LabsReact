import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './actions';
import "../Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    dispatch({ type: 'LOAD_CART_FROM_LOCAL_STORAGE', payload: savedCart });
  }, [dispatch]);

  const handleRemoveFromCart = (itemId, model) => {
    dispatch(removeFromCart(itemId));
    updateLocalStorage();
    alert(`${model} deleted from cart!`);
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
    updateLocalStorage();
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
    updateLocalStorage();
  };

  const getImageSource = (modelName) => {
    switch (modelName.toLowerCase()) {
      case 'f16':
        return require("../../../../../Home/Components_Home/Catalog/ImagesForCarts/F16.png");
      case 'il':
        return require("../../../../../Home/Components_Home/Catalog/ImagesForCarts/IL.png");
      case 'su':
        return require("../../../../../Home/Components_Home/Catalog/ImagesForCarts/SU.png");
      case 'mig29':
        return require("../../../../../Home/Components_Home/Catalog/ImagesForCarts/MIG29.png");
      default:
        return null;
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateLocalStorage = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div>
      <h2 className='Cart_header'>Shopping Cart</h2>
      <p className='TotalPrice'>Total Price: {calculateTotalPrice()}$ millions</p>
      <div id="checkout">
      <Link to ="/checkout">
            <button className="AircraftButton">BUY</button>
      </Link>
      </div>
      <ul className='ListOfAircrafts'>
        {cartItems.map(item => (
          <li className='Item' key={item.id}>
            <img className="AircraftImage" src={getImageSource(item.model)} alt={item.model} />
            <p className="Model">{item.model}</p>
            <p className="Price" id='cartPrice'>Price: {item.price}$ millions</p>
            <div className="Quantity">
            <button className='QuantityChanger' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <p>Quantity:{item.quantity || 0}</p>
            <button className='QuantityChanger' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button className='AircraftButton' id='addToCart' onClick={() => handleRemoveFromCart(item.id, item.model)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
