import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const ThirdView = () => {
    return (

        <div className="box ">

            <div className="p-5">



                <h1 className="mt-5">DO YOU NEED A MOBILE PHONE ???</h1> <br />
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus  ??</h6> <br />


                <Link to='/event'> <button type="Get Free Quote"
                    style={{ color: "white", fontSize: '17px', backgroundColor: 'rgb(177, 100, 187)' }} > Mobile Phone ={'>'} click here
                </button>
                </Link>









            </div>











        </div>
    );
}

export default ThirdView;