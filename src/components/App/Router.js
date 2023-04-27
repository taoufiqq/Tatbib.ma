import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import PrivateRoute from '../Auth/PrivateRouteMedecin';
import PrivateRouteSecretary from '../Auth/PrivateRouteSecretary'
import PrivateRoutePatient from '../Auth/PrivateRoutePatient';

// ---------import elements Acceuil----------
import Acceuil from '../Home/Acceuil'
import ResultSearchMedcine from '../Home/ResultSearchMedcine'
import RendezVous from '../Home/RendezVous'

// ---------import elements Patient----------
import EspacePatient from '../Patient/EspacePatient'
import LoginPatient from '../Patient/LoginPatient'
import SignUpPatient from '../Patient/SignUpPatient';
import ValidateAccount from '../Patient/ValidateAccount';
import DashboardPatient from '../Patient/DashboardPatient';
import SearchMedcine from '../Patient/SearchMedcine';
import AccountPatient from '../Patient/AccountPatient';
import UpdateAccountPatient from '../Patient/UpdateAccountPatient';
import ListOrdonnances from '../Patient/ListOrdonnances';
// ---------import elements Medecin----------
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
import Ordonnances from '../Médecin/Ordonnances'
// ---------import elements Secretary----------
import LoginSecretary from '../Secretary/LoginSecretary';
import DashboardSecretary from '../Secretary/DashboardSecretary';
import ConfirmAppointment from '../Secretary/ConfirmAppointment'
import AlertAppointment from '../Secretary/AlertAppointment';



function Routing () { 
    return (
        <BrowserRouter>
        <Routes>

     {/* Routes Acceuil  */}

            <Route path='/' exact element={<Acceuil/>} />
            <Route path='/resultSearchMedcine' exact element={<ResultSearchMedcine/>} />
            <Route path='/rendezVous/:idMedcine/:login' exact element={<RendezVous/>} />

    {/* Routes Patient  */}
            <Route path='/espacePatient' exact element={<EspacePatient/>} />
            <Route path='/loginPatient' exact element={<LoginPatient/>} />
            <Route path='/signUpPatient' exact element={<SignUpPatient/>} />
            <Route path='/patient/activateCompte/:token' exact element={<ValidateAccount/>} /> 
            <PrivateRoutePatient path='/dashboardPatient' exact element={<DashboardPatient/>} /> 
            <PrivateRoutePatient path='/searchMedcine' exact element={<SearchMedcine/>} /> 
            <PrivateRoutePatient path='/myAccount' exact element={<AccountPatient/>} /> 
            <PrivateRoutePatient path='/updateMyAccount' exact element={<UpdateAccountPatient/>} />
            <PrivateRoutePatient path='/listOrdonnancesPatient' exact element={<ListOrdonnances/>} />  

    {/* Routes Medecin  */}      
            <Route path='/espaceMédecin' exact element={<EspaceMedecin/>} />
            <Route path='/loginMedcine' exact element={<LoginMedcine/>} />
            <Route path='/signUpMedcine' exact element={<SignUpMedcine/>} />
            <PrivateRoute path='/createAccountSecretary' exact element={<CreateAccountSecretary/>} />
            <Route path='/medcine/activateCompte/:token' exact element={<ValidateAccountMedcine/>} /> 
            <PrivateRoute path='/dashboardMedcine' exact element={<DashboardMedcine/>} />
            <PrivateRoute path='/secretaryCompte' exact element={<SecretaryCompte/>} />
            <PrivateRoute path='/managementCompteSecretary' exact element={<ManagementCompteSecretary/>} />
            <PrivateRoute path='/managementAvailablityMedcine' exact element={<ManagementAvailablityMedcine/>} />
            <PrivateRoute path='/listAppointments' exact element={<ListAppointments/>} />
            <PrivateRoute path='/createOrdonnance' exact element={<CreateOrdonnances/>} />
            <PrivateRoute path='/listOrdonnances' exact element={<Ordonnances/>} />
    {/* Routes Secretary  */}      
            <Route path='/loginSecretary' exact element={<LoginSecretary/>} />
            <PrivateRouteSecretary path='/dashboardSecretary' exact element={<DashboardSecretary/>} />
            <PrivateRouteSecretary path='/confirmAppointment' exact element={<ConfirmAppointment/>} />
            <PrivateRouteSecretary path='/alertAppointment' exact element={<AlertAppointment/>} />
            




        </Routes>
        </BrowserRouter>
    );
 }

 export default Routing;