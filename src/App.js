import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from "./Components/Event1/Event";

import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Myevents from "./Components/Myevents/Myevents"
import Registration from "./Components/Registration/Registration"
import Allregistration from "./Components/Allregistration/Allregistration"
import Allevent from "./Components/Allevent/Allevent"
import Review from "./Components/Review/Review";
import Repairlocation from "./Components/Repairlocation/Repairlocation";

function App() {
  return (

    <div>

      <div>
        <Router>
          <div>
            <Switch>
            

              <Route exact path="/">
                <Header></Header>
              </Route>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/repairlocation">
                <Repairlocation></Repairlocation>
              </Route>



              <PrivateRoute path="/review">

                <Review></Review>



              </PrivateRoute>






              <PrivateRoute path="/registration/:id">
                <Registration></Registration>
              </PrivateRoute>

              <PrivateRoute path="/myevent">

                <Myevents></Myevents>

              </PrivateRoute>

              <PrivateRoute path="/allregistration">

                <Allregistration></Allregistration>

              </PrivateRoute>

              <PrivateRoute path="/allevent">

                <Allevent></Allevent>


              </PrivateRoute>

              <PrivateRoute path="/event">

                <Event></Event>


              </PrivateRoute>

            


            </Switch>
          </div>
        </Router>
      </div>


    </div>

  );
}

export default App;
