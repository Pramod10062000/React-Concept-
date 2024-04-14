import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import './Product.css';

 const Product =()=>{
  const [searchParam]=useSearchParams();

  //We can use pathname to access current url pattern like for this page it is /Product
  const {pathname}=useLocation();
  const {id}=useParams();
  useEffect(()=>{
    console.log(pathname);
    //To access data from url like email and password which is passed from  Login.js with navigation to ="" in url to product
    console.log(searchParam.get('email'));
    console.log(searchParam.get('password'));

  },[])
    return (<div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#-{id}</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

      
    </div>);
 }
 export default Product ;