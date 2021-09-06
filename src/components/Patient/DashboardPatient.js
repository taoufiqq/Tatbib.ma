import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import './login.css'

import logo from '../images/logo.png'


const DashboardPatient = () => {





  const history = useHistory();
  const logOut =()=>{

    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('IdPatient')
    localStorage.removeItem('ValidateCompte')
       history.push('/loginPatient');
    }



    return ( 
        <div className="Container">
 
  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
      <img src={logo}  />
      <h2></h2>
    </header>
    <ul>
      <li tabIndex={0} className="icon-customers"><span>Rendez-vous</span></li>
      <li tabIndex={0} className="icon-users"><span>Ordonnances</span></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
    <div className="helper">
    Mes rendez-vous

      <span> Gestion | Rendez-vous</span>
    </div>
    <p className="listRDV">Les rendez-vous</p>
    <Link to="/" style={{textDecoration:"none"}}><input type="button"  className="form-control mt-5 btnConnect rendez-vous" id="Rdv" value="Prendre un rendez-vous "/></Link>
  </main>
</div>
     );
}

export default DashboardPatient;