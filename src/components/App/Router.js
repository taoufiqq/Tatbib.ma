import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import PrivateRoute from '../Auth/PrivateRoute';


// import Components Acceuil
import Acceuil from '../Home/Acceuil'
import EspacePatient from '../Patient/EspacePatient'
import EspaceMedecin from '../Médecin/EspaceMedecin'
import LoginPatient from '../Patient/LoginPatient'
import SignUpPatient from '../Patient/SignUpPatient';
import ValidateAccount from '../Patient/ValidateAccount';




function Routes () { 
    return (
        <BrowserRouter>
        <Switch>

     {/* Routes SuperAdmin  */}

            <Route path="/" exact component={Acceuil} />
            <Route path="/espacePatient" exact component={EspacePatient} />
            <Route path="/espaceMédecin" exact component={EspaceMedecin} />
            <Route path="/loginPatient" exact component={LoginPatient} />
            <Route path="/signUpPatient" exact component={SignUpPatient} />
            <Route path="/patinet/activateCompte/:token" exact component={ValidateAccount} /> 
        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;