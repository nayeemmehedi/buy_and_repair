
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tablebody from './Tablebody';
import Dropdown from './Dropdown'

const Allregistration = () => {

    const [design1, setdesign1] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:4540/registrationAll/`)

            .then(res => res.json())
            .then(data => setdesign1(data))

    }, []);


    const user = JSON.parse(localStorage.getItem('user'))

    const [newevent, setnewevent] = useState(user.email)

   const newmagic =()=>{

    if( newevent === "programminghero001@gmail.com" || newevent === "boyneel79@gmail.com"){

        return true
    }


   }




    return (
        <div>

            {  newmagic() && <div className="row" >
               <div className="container col-3 mt-5 " >

                   <div style={{ border: '1px solid black', height: '700px',backgroundColor:'#c9e887'  }} className="container">
                       <h2>BD shop ADMIN pannel</h2><br />

                       <Link to="/allregistration"> <h4>REGISTRATION/</h4></Link> <br />



                       <Link to="/allevent"> <h4>EVENT</h4></Link>



                   </div>


               </div>




               <div className="col-9">

                   <div class='container mt-5'>

                       <table className="table">
                           <thead>
                               <tr>
                                   <th scope="col">Name</th>
                                   <th scope="col">Email</th>
                                   <th scope="col">Registrating date</th>
                                   <th scope="col">LiST</th>
                                   <th scope="col">DELETE</th>
                               </tr>
                           </thead>
                           <tbody>

                               {

                                   design1.map(data =>

                                       <Tablebody newdata={data} key={data._id}></Tablebody>
                                     

                                   )
                               }


                              

                           </tbody>

                          <tbody>



                          </tbody>



                              
                       </table>

                   </div>



               </div>
           </div>
}

        </div>
    

    );
};

export default Allregistration;