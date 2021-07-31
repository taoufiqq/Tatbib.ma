import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import patient from '../images/patient.png'
import './login.css'
export default function EspacePatient() {
    return (
    <div className="container-fluid">
             <div className="header">
                 <Link to="/"> <img src={logo} className="logo1" alt=""/></Link>
              <div className="buttons">
                  <Link to="/espaceMédecin" className="btn_Espace_Professionnels"><i class="fas fa-user-md"></i> Espace Professionnels</Link>
                  <Link to="/espacePatient" className="btn_Espace_Patients"><i class="fas fa-user-injured"></i> Espace Patients</Link>
              </div>
           </div>
           <div className="EspacePatient">
             <img src={patient} className="patient"/>
             <h5>Espace Patients</h5>
             <Link to="/loginPatient" type="submit" className="EspacePatientButton">Accéder à l'espace Patients</Link>
           </div>
         

    </div>
    )
}
