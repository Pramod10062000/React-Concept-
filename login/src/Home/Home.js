import img2 from '../assets/Image/img2.jpg';
import './Home.css';


const Home=()=>{

return(
    <div className='container'>
        Inside Home
        <div className='row'>
            <div className='col-12'>
            <img   src={img2} class="img-fluid" alt="Responsive image"></img>
            </div>
        </div>
        
    </div>
);
}
export default Home