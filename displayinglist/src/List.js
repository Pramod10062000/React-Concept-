import './List.css';
const List = (props) => {
    return (
        <div className="List">
            <h2>Notes are</h2>
            <ul>
                {props.getList.map((obj, index) => {
                    return (<div key={index}>
                        <li>{obj}</li>
                        <button onClick={() => props.editHandler(index)}>Edit</button>
                        <button onClick={() => props.onDeleteHandler(index)}>Delete</button>
                        

                    </div>)
                })}
            </ul>
        </div>
    )

}
export default List;