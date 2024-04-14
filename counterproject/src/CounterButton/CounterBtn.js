import './CounterBt.css';

const CounterBtn=(props)=>{
    return(
        <div className="btn">
            <button onClick={props.onIncrementHandler}>Increment</button>
            <button onClick={props.onDecrementHandler}>Decrement</button>
        </div>
    )
}
 export default CounterBtn;