import './CounterDisp.css';
const CounterDisplay=(props)=>{
    return(
        <div className="disp">
            <h3>The Updated value is :{props.counter}</h3>
        </div>
    )

}
export default CounterDisplay;