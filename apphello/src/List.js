import './Listfor.css';

function List(props) {
    return (

        
        <div className="container">
            <h1 className="header">{props.mobile}</h1>
            <h2>{props.price}</h2>
            <h3>{props.Discount}</h3>
        </div>
    )

}

export default List;