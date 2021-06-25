import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Review = () => {

    const history = useHistory();

    const [review, setReview] = useState({});



    const handlesubmit = (e) => {
        e.preventDefault();


        fetch(`http://localhost:4540/review`, {
            method: "POST",
            body: JSON.stringify(review),
            headers: {

                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert("successfully added");
                history.replace("/");
            });
    };









    const handlereview = (event) => {
        const newreview = { ...review };
        newreview[event.target.name] = event.target.value;
        setReview(newreview);
    };

    return (

        <div style={{borderRadius:"0 100px 0 100px"}} class="mb-3 h-100 w-75 d-flex justify-content-center m-5 p-5 bg-warning ">

            <form onSubmit={handlesubmit} action="">


            <label for="exampleFormControlInput1" class="form-label">Full name</label>
                <input onBlur={handlereview} name="name" type="text" class="form-control" placeholder="Full Name" /> 

                <label for="exampleFormControlInput1" class="form-label">Your Message</label>
               <textarea onBlur={handlereview} name="text" class="form-control" rows="3"> text</textarea> <br />

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>



        </div>


    );
};

export default Review;