
import React, { Component, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import "./Six.css"
import { Link } from 'react-router-dom';




const SixView = () => {


    const [review, setreview] = useState([])

    useEffect(() => {

        fetch('http://localhost:4540/reviewnow')
            .then(res => res.json())
            .then(data =>



               setreview(data)

            )

    }, []);



   
     


    
        return (
            <div>
                <h1 className="display-4 text-center ">ReVIEW CUSTOMER</h1>
                <p className="text-center "> <Link to ='/review'> review us - click here</Link></p>

                 
                <Carousel>
                {review.map(item => <div className="six text-center newsix m-5 p-5" key={item.id}>

                   <div>

                   <h1>{item.name}</h1><br />
                    
                    <p>{item.text}</p>



                   </div>
                
                
                
                </div>)}
               </Carousel>





            </div>
           
        )
    }


export default SixView;