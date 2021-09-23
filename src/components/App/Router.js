import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import PrivateRoute from '../Auth/PrivateRouteMedecin';
import PrivateRouteSecretary from '../Auth/PrivateRouteSecretary'
import PrivateRoutePatient from '../Auth/PrivateRoutePatient';

// ---------import Components Acceuil----------
import Acceuil from '../Home/Acceuil'
import ResultSearchMedcine from '../Home/ResultSearchMedcine'
import RendezVous from '../Home/RendezVous'

// ---------import Components Patient----------
import EspacePatient from '../Patient/EspacePatient'
import LoginPatient from '../Patient/LoginPatient'
import SignUpPatient from '../Patient/SignUpPatient';
import ValidateAccount from '../Patient/ValidateAccount';
import DashboardPatient from '../Patient/DashboardPatient';
import SearchMedcine from '../Patient/SearchMedcine';
import AccountPatient from '../Patient/AccountPatient';
import UpdateAccountPatient from '../Patient/UpdateAccountPatient';
// ---------import Components Medecin----------
import EspaceMedecin from '../Médecin/EspaceMedecin'
import SignUpMedcine from '../Médecin/SignUpMedcine';
import CreateAccountSecretary from '../Médecin/CreateAccountSecretary';
import LoginMedcine from '../Médecin/LoginMedcine';
import ValidateAccountMedcine from '../Médecin/ValidateAccountMedcine';
import DashboardMedcine from '../Médecin/DashboardMedcine';
import SecretaryCompte from '../Médecin/SecretaryCompte';
import ManagementCompteSecretary from '../Médecin/ManagementCompteSecretary';
import ManagementAvailablityMedcine from '../Médecin/ManagementAvailablityMedcine';
import ListAppointments from '../Médecin/ListAppointments';
import CreateOrdonnances from '../Médecin/CreateOrdonnances';
// ---------import Components Secretary----------
import LoginSecretary from '../Secretary/LoginSecretary';
import DashboardSecretary from '../Secretary/DashboardSecretary';
import ConfirmAppointment from '../Secretary/ConfirmAppointment'
import AlertAppointment from '../Secretary/AlertAppointment';



function Routes () { 
    return (
        <BrowserRouter>
        <Switch>

     {/* Routes Acceuil  */}

            <Route path="/" exact component={Acceuil} />
            <Route path="/resultSearchMedcine" exact component={ResultSearchMedcine} />
            <Route path="/rendezVous/:idMedcine/:login" exact component={RendezVous} />

    {/* Routes Patient  */}
            <Route path="/espacePatient" exact component={EspacePatient} />
            <Route path="/loginPatient" exact component={LoginPatient} />
            <Route path="/signUpPatient" exact component={SignUpPatient} />
            <Route path="/patient/activateCompte/:token" exact component={ValidateAccount} /> 
            <PrivateRoutePatient path="/dashboardPatient" exact component={DashboardPatient} /> 
            <PrivateRoutePatient path="/searchMedcine" exact component={SearchMedcine} /> 
            <PrivateRoutePatient path="/myAccount" exact component={AccountPatient} /> 
            <PrivateRoutePatient path="/updateMyAccount" exact component={UpdateAccountPatient} /> 

    {/* Routes Medecin  */}      
            <Route path="/espaceMédecin" exact component={EspaceMedecin} />
            <Route path="/loginMedcine" exact component={LoginMedcine} />
            <Route path="/signUpMedcine" exact component={SignUpMedcine} />
            <PrivateRoute path="/createAccountSecretary" exact component={CreateAccountSecretary} />
            <Route path="/medcine/activateCompte/:token" exact component={ValidateAccountMedcine} /> 
            <PrivateRoute path="/dashboardMedcine" exact component={DashboardMedcine} />
            <PrivateRoute path="/secretaryCompte" exact component={SecretaryCompte} />
            <PrivateRoute path="/managementCompteSecretary" exact component={ManagementCompteSecretary} />
            <PrivateRoute path="/managementAvailablityMedcine" exact component={ManagementAvailablityMedcine} />
            <PrivateRoute path="/listAppointments" exact component={ListAppointments} />
            <PrivateRoute path="/createOrdonnance" exact component={CreateOrdonnances} />
    {/* Routes Secretary  */}      
            <Route path="/loginSecretary" exact component={LoginSecretary} />
            <PrivateRouteSecretary path="/dashboardSecretary" exact component={DashboardSecretary} />
            <PrivateRouteSecretary path="/confirmAppointment" exact component={ConfirmAppointment} />
            <PrivateRouteSecretary path="/alertAppointment" exact component={AlertAppointment} />
            




        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;