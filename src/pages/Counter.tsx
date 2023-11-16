import {useReducer ,useRef, useEffect, useState} from 'react'

const Counter = () => {

    const myReducer = (state, action) => {
          switch(action.type) {
            case 'plus': 
            return {count: state.count + 1}; 
            case 'minus':
            return {count: state.count - 1}
            default: 
            return state;
          }
    };

    const myRef = useRef<HTMLdivElement>(null);  

    const [boxWidth, setBoxWidth] = useState<number>(0); 

    useEffect(() => {
      if(myRef.current)
       setBoxWidth(myRef.current.clientWidth); 
    }, [])
    
    

    const [state , dispatch ] = useReducer(myReducer , {count: 0}); 
  return (
    <div>
      <h1>Button cliker</h1>
      <p>Count is: {state.count}</p>
      <button onClick={() => dispatch({ type: 'plus' })}>Plusi</button>
      <button onClick={() => dispatch({ type: 'minus' })}>Minusi</button>
      <div ref={myRef} style={{ width: '70%', border: '1px solid black', padding: '10px' }} >
        This is the box 
        <p> Box is : {boxWidth}</p>
      </div>
    </div>  
  ); 
}

export default Counter;
