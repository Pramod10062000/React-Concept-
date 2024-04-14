import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {

  const [getList,setList]=useState(["/Products","/Prod","/Prducts","/items"])
  const [getFlag,setFlag]=useState(false);
  const {pathname}=useLocation();
  useEffect(()=>{
    console.log(pathname)
    const filter=getList.includes(pathname);
    if(filter){
      setFlag(true);
    }
  },[])
    return (
        <div className="container">
            <div className="row">
            <div class="jumbotron">
  <h1 class="display-4">Sorry!</h1>
  <p class="lead">404 No Url Found</p>
  <h3>{pathname}</h3>
  <hr class="my-4"/>
  <p>Checking your network cables, modem, and routers</p>
  <p>Please try the following url</p>
  {getFlag && <h1><Link to="Product">Product</Link></h1>}
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Diagnose issue</a>
  </p>
</div>
            </div>



        </div>
    );

}
export default NoMatch;