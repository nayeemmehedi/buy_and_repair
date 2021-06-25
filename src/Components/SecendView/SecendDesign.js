import React from 'react';
import miphn from "../../image/mi phn.jpg"
import tab from "../../image/tab.jpg"
import phone from "../../image/phone.jpg"
import { Link } from 'react-router-dom';




const SecendDesign = ({data}) => {
   
    return (
       

            <div class="card m-5 p-5 " style={{width: "28rem"}}>

<Link to='/repairlocation'>
                <img style={{height:'280px',width:"200px"}} class="card-img-top img-fluid" src={data.img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <button>Contact Us</button>
                </div>
                </Link>
            </div>

        
    );
};

export default SecendDesign;