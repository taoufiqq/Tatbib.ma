import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import login from '../images/login.svg'
import './login.css'
export default function LoginPatient() {
    return (

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
           <div className="card EspacePatient">
          <div className="row">
          <div class="col-12 col-md-12 col-lg-6 ">
           <form class="row" novalidate>
           <label class="form-label">Se Connecter</label>
             <div className="fromlogin">
            
                 <input  type="email" placeholder="Email" class="form-control" id="validationCustom01" required/>
       
                 <input type="password" placeholder="Password" class="form-control " id="validationCustom02"  required/>
             
    
                 <input type="submit"  class="form-control mt-5 btnConnect" id="validationCustom02" value="Se Connecter"/>
                 <Link to="/signUpPatient" style={{textDecoration:"none"}}><input type="submit"  class="form-control mt-3 btnAuth" id="validationCustom02" value="Creé un compte "/></Link>
         
             </div>
           </form>
           </div>
           <div class="col-12 col-md-12 col-lg-6 ">
              <img src={login} className="imgLogin"/>
           </div>
           </div>
           </div>
         </div>
     </section>

    )
}
