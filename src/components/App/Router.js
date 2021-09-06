import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import PrivateRoute from '../Auth/PrivateRouteMedecin';

import PrivateRoutePatient from '../Auth/PrivateRoutePatient';

// ---------import Components Acceuil----------
import Acceuil from '../Home/Acceuil'

// ---------import Components Patient----------
import EspacePatient from '../Patient/EspacePatient'
import LoginPatient from '../Patient/LoginPatient'
import SignUpPatient from '../Patient/SignUpPatient';
import ValidateAccount from '../Patient/ValidateAccount';
import DashboardPatient from '../Patient/DashboardPatient';
// ---------import Components Medecin----------
import EspaceMedecin from '../Médecin/EspaceMedecin'





function Routes () { 
    return (
        <BrowserRouter>
        <Switch>

     {/* Routes Acceuil  */}

            <Route path="/" exact component={Acceuil} />

    {/* Routes Patient  */}
            <Route path="/espacePatient" exact component={EspacePatient} />
            <Route path="/loginPatient" exact component={LoginPatient} />
            <Route path="/signUpPatient" exact component={SignUpPatient} />
            <Route path="/patient/activateCompte/:token" exact component={ValidateAccount} /> 
            <PrivateRoutePatient path="/dashboardPatient" exact component={DashboardPatient} /> 

    {/* Routes Medecin  */}      
    <Route path="/espaceMédecin" exact component={EspaceMedecin} />






        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;