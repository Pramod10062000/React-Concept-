import './CounterIp.css';


const CounterIp = (props) => {

    const onChangeInput = (event) => {
        props.onChangeHandler(parseInt(event.target.value));

    }
    return (
        <div className="Container">
            <p>Enter Capital</p>
            <input type="number" onChange={onChangeInput} name="value1" id="val1" placeholder='Enter Value' />
        </div>

    );
}
export default CounterIp;