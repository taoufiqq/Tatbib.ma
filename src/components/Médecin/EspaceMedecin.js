import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import Medicine from '../images/Medicine.svg'
import './espaceMedecin.css'
export default function EspacePatient() {
    return (
      <div className="container-fluid px-0" style={{overflow: 'auto'}}>
      <section className="header-page">
          <div className="container">
                <div className="row justify-content-between py-3 align-items-center">
                  <div className="col-12 col-sm-3 col-lg-4 d-flex justify-content-center justify-content-lg-start py-2 py-lg-0">
                   <Link to="/"><img src={logo} width="100px"/></Link>
                    
                  </div>
                  <div className="col-12 col-sm-9 col-lg-6 col-xl-4">
                      <div className="row justify-content-center">
                          <div className="col-6 col-md-4 col-lg-5 col-xl-6 d-flex justify-content-end">
                              <Link className="btn_Espace_Professionnels" to="/espaceMédecin">
                                  <i className="fas fa-user-injured"></i> Espace Professionnels
                              </Link>
                          </div>
                          <div className="col-6 col-md-4 col-lg-5 d-flex justify-content-center">
                              <Link className="btn_Espace_Patients" to="/espacePatient">
                                  <i className="fas fa-user-injured"></i> Espace Patients
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
           <div className="card EspaceMedicine">
             <img src={Medicine} className="Medicine"/>
             <h5>Espace Professionnels</h5>
             <div  className="EspaceProfessionnel">Accéder à l'espace Professionnels</div>
             <div className="btn">
             <button type="submit" className="EspaceProfessionnelButton1">Professionnels</button>
             <button type="submit" className="EspaceProfessionnelButton1">Secrétaire</button>
             </div>
           </div>
         

           </div>
           </section>
    </div>
    )
}
