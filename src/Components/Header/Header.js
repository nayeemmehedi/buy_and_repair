import React from 'react';
import FirstView from '../FirstView/FirstView';
import FiveView from '../FiveView/FiveView';
import Footer from '../Footer/Footer';
import FourView from '../FourView/FourView';
import Navbar from '../Navbar/Navbar';
import SecendView from '../SecendView/SecendView';
import SixView from '../SixView/SixView';
import ThirdView from '../ThirdView/ThirdView';
import { Link } from 'react-router-dom';
import Sevenview from '../SevenView/Sevenview';


const Header = () => {
    return (
        <div>
             <h1 className="text-center">BUY AND REPAIR</h1>
            <Navbar></Navbar>
            <FirstView></FirstView>
           <SecendView></SecendView>
           <ThirdView></ThirdView>
           <FourView></FourView> 
           <FiveView></FiveView> 
          

           <SixView></SixView>

           <Sevenview></Sevenview>

           
           
           <Footer></Footer>

                   
        </div>
    );
};

export default Header;