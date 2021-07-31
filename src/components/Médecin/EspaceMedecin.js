import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import Medicine from '../images/Medicine.svg'
import './espaceMedecin.css'
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
             <img src={Medicine} className="Medicine"/>
             <h5>Espace Professionnels</h5>
             <button type="submit" className="EspaceProfessionnelButton">Accéder à l'espace Professionnels</button>
             <div className="btn">
             <button type="submit" className="EspaceProfessionnelButton1">Professionnels</button>
             <button type="submit" className="EspaceProfessionnelButton1">Secrétaire</button>
             </div>
           </div>
         

    </div>
    )
}
