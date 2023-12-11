import { v4 as uuidv4 } from 'uuid';

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: { ...item, id: uuidv4() },
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});

export const increaseQuantity = (itemId) => ({
  type: 'INCREASE_QUANTITY',
  payload: itemId,
});

export const decreaseQuantity = (itemId) => ({
  type: 'DECREASE_QUANTITY',
  payload: itemId,
});
