import './App.css';
//step 1 : Please install react-router-dom
//step import the following packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Contact/Contact';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import NoMatch from './NoMatch/NoMatch';
import Product from './Product/Product';
import Register from './Register/Register';
import User from './User/User';
import Users from './User/Users';
function App() {
  const userlist=[
    {id:1,
    fullname:"Pramod"},
    {
      id:2,
      fullname:"Virat"
    },
    {
      id:3,
      fullname:"Rohit"
    }
  ]
  return (

    <div className="App">
      <BrowserRouter>
        {/* Common Component kept out of Route As we know that Header will be common to Each and every page */}
        <Header />
        {/* <Foooter /> */}
        <Routes>
          <Route path="Home" element={<Home/>} />
          <Route path="Contacts" element={<Contacts/>} />
          <Route path='Login' element={<Login />} />
          {/* Dynamic Params */}
          <Route path='Product/:id' element={<Product/>} />
          <Route path='Register' element={<Register />} />
          <Route path='*' element={<NoMatch />} />
          <Route path="users" element={<Users list={userlist}/>}>
          <Route path=':names' element={<User/>}  />
          </Route>
            
        </Routes>

        {/* <NoMatch/> */}
      </BrowserRouter>

    </div>
  );
}

export default App;



//useLocation:to get path /entire url we will not get domain name
//useParams : to get value from url Product/1006 id=1006 to get id dunamic params to access dynamic id
//for the above check Routes 
//<Route path="product/id" element={<Product/>}/>
//useSearchParams : to get key value from url email and password.we need to pass keys check login.js and Product.js