import { Link, NavLink } from 'react-router-dom';
import './Header.css';
//Dont use Href in React rather that that use Link tag
//Toget rid of <a> tag since in react we dont use href we can use <NavLink> tag
//<a></a> without href is of no use so use <NavLink> to use link and transfering control
//<NavLink> tag is automatically converted into <a> tag by react internally/replacement on <a> Mos preferable
//<Link tag is also converted into <a> tag

const Header = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {/* <a class="nav-link active" aria-current="page"><Link to="Home">Home</Link></a> */}
                            <NavLink className="nav-link active" to="Home"> Home</NavLink>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link active" aria-current="page" ><Link to="Contact">Contact</Link></a> */}
                            <NavLink className="nav-link active" aria-current="page" to="Contacts">Contacts</NavLink>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button style={{ marginRight: '15px' }} class="btn btn-outline-success" type="submit"><Link to="Login">Login</Link></button>
                        <button class="btn btn-outline-success" type="submit"><Link to="Register">Register</Link></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Header;