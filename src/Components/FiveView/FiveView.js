import React from 'react';
import './FiveView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBatteryHalf } from '@fortawesome/free-solid-svg-icons'
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'



const FiveView = () => {
    return (
        <div className="nayeem1 text-wrap text-center mt-5 pt-5">

            <h3 className="text-center"> <FontAwesomeIcon style={{color:"black"}} icon={faCoffee} size="2x " />  SERVICE AVALAIBLE 24/7</h3><br />


            <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris.</h5> <br />


            <h3 className="text-center"><FontAwesomeIcon style={{color:"black"}} icon={faBatteryHalf} size="2x " /> WATER DAMAGE</h3> <br />


            <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris.</h5> <br />

            <h3 className="text-center"><FontAwesomeIcon style={{color:"black"}} icon={faHeadphonesAlt} size="2x " /> SPEAKER FAILURE</h3><br />
            <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris.</h5> <br />


            <h3 className="text-center"><FontAwesomeIcon style={{color:"black"}} icon={faTv} size="2x " /> LCD REPLACEMENT</h3> <br />
            <h5 className="text-center">Morbi leo risus, porta ac consectetur ac feanumi vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris.</h5>



            {/* <input type="Get a Quote" value="Get a Quote"
            style="color:rgb(29, 169, 173); background-color: rgb(66, 3, 42); height: 25px; width: 25%; " /> */}
        </div>



    );
};

export default FiveView;