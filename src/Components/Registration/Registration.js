import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import Payment from '../Payment/Payment'




const Registration = () => {

    const history = useHistory()

    const user = JSON.parse(localStorage.getItem('user'))

    const [event, setEvent] = useState({})

    console.log(user)

    const { id } = useParams()

    const [registration, setregistration] = useState({
        userName: user.name,
        userEmail: user.email,


    })

    useEffect(() => {

        fetch(`http://localhost:4540/event/${id}`)
            .then(res => res.json())
            .then(data => {

                setEvent(data)

                const newRegistration = { ...registration }

                newRegistration.eventName = data.name
                newRegistration.eventDescription = data.description
                newRegistration.img = data.img
                newRegistration.price = data.price


                setregistration(newRegistration)






            }



            )

    }, []);











    // const submitRegistration = (e) => {
    //     e.preventDefault()





    //     fetch(`http://localhost:4540/addRegistration`, {

    //         method: 'POST',
    //         body: JSON.stringify(registration),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },

    //     })
    //         .then(response => response.json())
    //         .then(data =>

    //             history.replace('/')



    //         );



    // }


    const handlePayemetSuccess = (paymentId) =>{


       



         

            if(paymentId){

                console.log(paymentId)
                


        fetch(`http://localhost:4540/addRegistration`, {

            method: 'POST',
            body: JSON.stringify(registration),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then(response => response.json())
            .then(data =>

                history.replace('/')



            );








            }
            else{
                alert("something wrong")
            }










        
    }
    







    return (

        <div>

            <Payment handlepayment={handlePayemetSuccess}></Payment>




        </div>
    );
};

export default Registration;