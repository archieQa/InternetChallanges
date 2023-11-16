import { useReducer, useState } from "react"

const NewChallenge = () => {
    const reducer = (state , action) => {
        switch(action.type) {
            case 'INCREMENT': 
            return {...state, counter: state.counter + 1}; 
            case 'DECREMENT': 
            return {...state, counter: state.counter - 1}; 
            case 'ADD_ITEM': 
            return {...state, items: [...state.items, {id: Date.now(), name: action.payload.name, quantity: action.payload.quantity }]}
            case 'REMOVE_ITEM': 
            return {...state,  items: state.items.filter((item) => item.id !== action.payload)}
            case 'INCREMENT_QUANTITY':
            return {...state, items: state.items.map((item) => 
              item.id === action.payload ? {...item, quantity: item.quantity + 1}: item
              )}
            case 'DECREMENT_QUANTITY':
              return {...state, items: state.items.map((item) => 
                item.id === action.payload ? {...item, quantity: item.quantity - 1}: item
                )}
            default:
            return state;
        }
    }

    const initialState = {
        counter: 0,
        items: [],
    };
    const [state , dispatch] = useReducer(reducer, initialState) 
    const [newItem ,setNewItem] = useState({name: '', quantity: 1});

    const handleAddItem  = () => {
        if(newItem.name.trim() !== '')
        dispatch({type: 'ADD_ITEM', payload: {name:newItem.name.trim(), quantity: newItem.quantity}})
        setNewItem({ name: '', quantity: 1})
    }

  return (
    <div className="Container">
      <p>{state.counter}</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>PLUS</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>MINUS</button>
    
    <div>
        <input 
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({...newItem, name: e.target.value})}
        />
        <input 
        type="number"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value, 10) || 1 })}
        /> 
        <button onClick={handleAddItem}>Add Item</button>
    </div>
    <ul>
        {state.items.map(item => (
            <li key={item.id}>
                {item.name} - {item.quantity}
                <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item.id})}>Remove Item</button>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default NewChallenge
