import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import logo from '../images/logo.png'
import './espaceMedecin.css'

export default  function DashboardMedcine () {





  const history = useHistory();
  const logOut =()=>{

    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('LoginMedcine')
    localStorage.removeItem('ValidateCompte')
       history.push('/loginMedcine');
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
      <li tabIndex={0} className="icon-profil"><span>Profil</span></li>
      <li tabIndex={0} className="icon-Secrétaire"><span>Secrétaire</span></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
  </main>
</div>
     );
}

