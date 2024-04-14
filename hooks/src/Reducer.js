import { useReducer } from "react";

const Reducer = () => {
    
    const initialState = 1;
    const reducer = (state, action) => {
        switch (action) {
            case 'Increment':
                return (state + 1);
            case 'Decrement':
                return (state-1);
            case 'neutral':
                return (state+0);

        }
    }



    const [value, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='container'>

            <div>
                <input type='text' readOnly value={value} />
            </div>
            <div>
                <button onClick={()=>dispatch('Increment')}>Increment</button>
                <button onClick={()=>dispatch('Decrement')}>Decrement</button>
                <button onClick={()=>dispatch('neutral') }>Neutral</button>
            </div>
            {/* whenever we remove this component the useEffect within the component will be called */}
            {/* {getFlag && <List />} */}

        </div>

    )
}
export default Reducer;


//Exactly same as useState same concept used to manage state but useReduce is used to manage and return  multiple state 
// using a function to do so 