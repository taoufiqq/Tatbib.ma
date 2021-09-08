import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import PrivateRoute from '../Auth/PrivateRouteMedecin';
import PrivateRouteSecretary from '../Auth/PrivateRouteSecretary'
import PrivateRoutePatient from '../Auth/PrivateRoutePatient';

// ---------import Components Acceuil----------
import Acceuil from '../Home/Acceuil'

// ---------import Components Patient----------
import EspacePatient from '../Patient/EspacePatient'
import LoginPatient from '../Patient/LoginPatient'
import SignUpPatient from '../Patient/SignUpPatient';
import ValidateAccount from '../Patient/ValidateAccount';
import DashboardPatient from '../Patient/DashboardPatient';
import SearchMedcine from '../Patient/SearchMedcine';
// ---------import Components Medecin----------
import EspaceMedecin from '../Médecin/EspaceMedecin'
import SignUpMedcine from '../Médecin/SignUpMedcine';
import LoginMedcine from '../Médecin/LoginMedcine';
import ValidateAccountMedcine from '../Médecin/ValidateAccountMedcine';
import DashboardMedcine from '../Médecin/DashboardMedcine';
import SecretaryCompte from '../Médecin/SecretaryCompte';
import ManagementCompteSecretary from '../Médecin/ManagementCompteSecretary';
// ---------import Components Secretary----------
import SignUpSecretary from '../Secretary/SignUpSecretary';
import LoginSecretary from '../Secretary/LoginSecretary';
import DashboardSecretary from '../Secretary/DashboardSecretary';



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
            <PrivateRoutePatient path="/searchMedcine" exact component={SearchMedcine} /> 

    {/* Routes Medecin  */}      
            <Route path="/espaceMédecin" exact component={EspaceMedecin} />
            <Route path="/loginMedcine" exact component={LoginMedcine} />
            <Route path="/signUpMedcine" exact component={SignUpMedcine} />
            <Route path="/medcine/activateCompte/:token" exact component={ValidateAccountMedcine} /> 
            <PrivateRoute path="/dashboardMedcine" exact component={DashboardMedcine} />
            <PrivateRoute path="/secretaryCompte" exact component={SecretaryCompte} />
            <PrivateRoute path="/managementCompteSecretary" exact component={ManagementCompteSecretary} />

    {/* Routes Secretary  */}      
            <Route path="/loginSecretary" exact component={LoginSecretary} />
            <Route path="/signUpSecretary" exact component={SignUpSecretary} />
            <PrivateRouteSecretary path="/dashboardSecretary" exact component={DashboardSecretary} />




        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;