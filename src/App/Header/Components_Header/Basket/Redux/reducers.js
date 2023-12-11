import { v4 as uuidv4 } from 'uuid';


const initialState = {
  cartItems: [],
};



const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
  return {
    ...state,
    cartItems: [...state.cartItems, { ...action.payload, quantity: 1, id: uuidv4() }],
  };

      case 'REMOVE_FROM_CART':
        const indexToRemove = state.cartItems.findIndex(item => item.id === action.payload);
      
        if (indexToRemove !== -1) {
          const newCartItems = [...state.cartItems];
          newCartItems.splice(indexToRemove, 1);
      
          return {
            ...state,
            cartItems: newCartItems,
          };
        }
        case 'INCREASE_QUANTITY':
  return {
    ...state,
    cartItems: state.cartItems.map(item =>
      item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
    ),
  };

case 'DECREASE_QUANTITY':
  return {
    ...state,
    cartItems: state.cartItems.map(item =>
      item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    ),
  };
        return state;
    default:
      return state;
  }
};

export default cartReducer;

