import './Table.css';
const Table = (props) => {
    return (
        <div>
            <table className="table table-dark table-striped">
<thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Question</th>
                    <th scope="col">ANSWER</th>
                </tr>
                </thead>
                {props.global.map((obj) => {
                    return (
                        <tbody>
                       
                            
                            <tr>
                        
                        <td>{obj.id}</td>
                        <td>{obj.Question}</td>
                        <td>{obj.value}</td>
                    </tr>
                   
                    
                    </tbody>
                        
                    )
                })}


            </table>

        </div>

    )
}

export default Table;