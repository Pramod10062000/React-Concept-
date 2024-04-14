import { Component } from 'react';
import './Form.css';
class Form extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container'>

                <form>
                    <div className="mb-3">
                        <label  className="form-label">Product Name</label>
                        <input name="Product_Name" onChange={this.props.onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Product Price</label>
                        <input name='Price' onChange={this.props.onChangeHandler} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button onClick={this.props.onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
                </form>



            </div>

        )
    }
}
export default Form;