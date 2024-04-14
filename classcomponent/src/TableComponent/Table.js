import { Component } from 'react';
import './Table.css';
class Table extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.data)
    }
    render() {
        return (

            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((Obj, index) => {

                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{Obj.Product_Name}</td>
                                    <td>{Obj.Price}</td>


                                </tr>

                            )

                        })
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}
export default Table;