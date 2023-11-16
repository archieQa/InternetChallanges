import React, { useReducer } from 'react';

const ShoppingCard = () => {
  const cardReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_CARD':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_CARD':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cardReducer,[]);

  const addItem = (name, price) => {
    const newItem = {
      id: Date.now(),
      name,
      price,
    };
    
    dispatch({ type: 'ADD_CARD', payload: newItem });
  };

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_CARD', payload: itemId });
  };

  const totali = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container">
      <h1>Shopping Card</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Totali: ${totali()}</p>
      <button onClick={() => addItem('nona', 56)}>Add Item</button>
      <button onClick={() => addItem('baba', 46)}>Add Item</button>
    </div>
  );
};

export default ShoppingCard;
