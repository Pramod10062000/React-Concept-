import './FormInput.css';


const FormInput=(props)=>{
    return(
        <div className="InputForm">
            <h1>Form Input</h1>
            <div className="FormInp">
                <input  value={props.value} type="text" onChange={props.onchangeHandler}/>
                {props.typeStatus?<button onClick={ props.onEditSubmit}>Edit</button>:<button onClick={props.onClickHandler}>Add</button>}
            </div>
        </div>
    )
}
export default FormInput;