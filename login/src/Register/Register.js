import { useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigation=useNavigate();
    const onSubmitHandler=(event)=> {    
        event.preventDefault();
            alert("Registered");
            navigation("/Login")
        }
//Toget rid of <a> tag since in react we dont use href we can use <NavLink> tag
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                </div>

                <div className='col-4'>
                    <h3>Please Register User</h3>
                    <form>

                        <div class="form-group">
                            <label >Email address</label>
                            <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label >Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Password" />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" >Check me out</label>
                        </div>
                        <button onClick={onSubmitHandler} type="submit" class="btn btn-primary">Register</button>
                    </form>

                </div>
                <div className='col-4'>
                </div>
            </div>
        </div>

    );
}
export default Register