import React, { useEffect, useState } from 'react';
import DesignBox from '../DesignBox/DesignBox';
 



const Event = () => {



    const [logged, setLogged] = useState([])

   

    useEffect(() => {

        fetch('https://localhost:4540/event')
            .then(res => res.json())
            .then(data =>



                setLogged(data)

            )

    }, []);

   


    return (
        <div className='container'>

            <h1 className='text-center'> <span style={{color:'red'}} >Buy mobile </span>  <span style={{color:'green'}} >phones online in BANGLADESH </span>...</h1> <br /> <br />



            <div className='row'>



                {
                    logged.map(data => <DesignBox newdata={data} key={data._id}></DesignBox>)

                }


            </div>



        </div>
    );
};

export default Event;