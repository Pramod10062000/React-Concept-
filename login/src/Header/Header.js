import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
//Dont use Href in React rather that that use Link tag
//Toget rid of <a> tag since in react we dont use href we can use <NavLink> tag
//<a></a> without href is of no use so use <NavLink> to use link and transfering control
//<NavLink> tag is automatically converted into <a> tag by react internally/replacement on <a> Mos preferable
//<Link tag is also converted into <a> tag
import { useSelector } from 'react-redux';
const Header = () => {
    // const dispatch=useDispatch();
    // const navigation=useNavigate();
    const auth = useSelector((state) => state.authentication);
    useEffect(() => {
   
    console.log(auth); 
     
    }, [auth])
    
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page"><Link to="Home">Home</Link></a> */}
                            <NavLink className="nav-link active" to="Home"> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a class="nav-link active" aria-current="page" ><Link to="Contact">Contact</Link></a> */}
                            <NavLink className="nav-link active" aria-current="page" to="Contacts">Contacts</NavLink>
                        </li>
                    </ul>

                    <form className="d-flex">
                        <button style={{ marginRight: '15px' }} className="btn btn-outline-success" type="submit"><Link to="Login">Login</Link></button>
                        <button className="btn btn-outline-success" type="submit"><Link to="Register">Register</Link></button>
                    </form>


                    <form className="d-flex">
                        <button style={{ marginRight: '15px' }} className="btn btn-outline-success" type="submit"><Link to="">Logout</Link></button>
                    </form>

                </div>
            </div>
        </nav>
    );
}
export default Header;