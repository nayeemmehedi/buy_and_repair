import React from 'react';
import fakedata from "./secend.json"
import SecendDesign from './SecendDesign';


const SecendView = () => {
    return (
        <div>
            <h1 className="text-center mt-5 text-primary">Our Services</h1>
            <div className="row d-flex justify-content-center">
           
            

           {
               fakedata.map (newdata=> 
                   <SecendDesign data ={newdata} ></SecendDesign>

                   

               )


           }

           
       </div>
        </div>
    );
};

export default SecendView;