import axios from "axios";
import React, { useEffect } from "react";
import {useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import './login.css'

import logo from '../images/logo.png'


const DashboardPatient = () => {





  const login =localStorage.getItem('LoginPatient')
  const history = useHistory();
  const logOut =()=>{

    localStorage.removeItem('tokenPatient')
    localStorage.removeItem('rolePatient')
    localStorage.removeItem('LoginPatient')
    localStorage.removeItem('ValidateComptePatient')
       history.push('/loginPatient');
       toastr.success(' LogOut SuccessFully')
    }



    return ( 
        <div className="Container">
 
  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
      <img alt="" src={logo}  />
      <h6>Welcome</h6>
      <h5 style={{color:'white'}}>{login}</h5>
    </header>
    <ul>
      <li tabIndex={0} className="icon-customers"><span>Appointment</span></li>
      <li tabIndex={0} className="icon-users"><span>Ordonnances</span></li>
      <li tabIndex={0} className="icon-profil"><Link to='/myAccount' style={{textDecoration:"none",color:"white"}}><span>MyAccount</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
    <div className="helper">
    Mes rendez-vous

      <span> Gestion | Rendez-vous</span>
    </div>
    <p className="listRDV">Les rendez-vous</p>
    <Link to="/searchMedcine" style={{textDecoration:"none"}}><input type="button"  className="form-control mt-5 btnConnect rendez-vous" id="Rdv" value="Prendre un rendez-vous "/></Link>
  </main>
</div>
     );
}

export default DashboardPatient;