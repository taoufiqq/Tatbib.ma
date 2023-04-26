import React, { useState } from 'react';
import {Link,useHistory } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import logo from '../images/logo.png';
import Imglogin from '../images/login.svg'
import './login.css'

export default function LoginPatient() {


    const history = useHistory();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();




    const handleSubmit = (e) => {
        e.preventDefault();

    const patient = {login,password};

    axios.post(`https://tatbib-api.onrender.com/patient/login`,patient)
		.then(res => {
            console.log(res)
        if(!res.data.message){ 
            
             let verifier= res.data.verified;             
             localStorage.setItem("ValidateComptePatient", verifier);
        if(verifier === false){
             toastr.error('Please Verifier You Accout First by Click on URL In Your Email Box')
        }else{
             let token= res.data.token;
             let role= res.data.role;
             localStorage.setItem("tokenPatient", token);
             localStorage.setItem("LoginPatient", login);
             localStorage.setItem("rolePatient", role);
             localStorage.setItem("id_patient",res.data.id);
             history.push('/dashboardPatient');
             toastr.success(' authenticated SuccessFully')
       }

        }else{

             // Calling toast method by passing string 
             toastr.warning(res.error, 'Username Or password invalid !!!! Please try again !') 


            }
        })
    }
    return (

        <section className="header-page">
            <div className="container">
            <div className="row justify-content-between py-3 align-items-center">
                    <div className="col-12 col-sm-3 col-lg-4 d-flex justify-content-center justify-content-lg-start py-2 py-lg-0">
                     <Link to="/"><img alt="" src={logo} width="100px"/></Link>
                      
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
          <div class="col-12 col-md-12 col-lg-6 "  style={{marginTop:'2%'}}>
           <form class="row"  onSubmit={handleSubmit}>
           <label class="form-label">Se Connecter</label>
             <div className="fromlogin">
            
                 <input  type="text" placeholder="Login" class="form-control"  required  
                 value={login} 
                 onChange={e => setLogin(e.target.value)}/>
       
                 <input type="password" placeholder="Password" class="form-control "   required 
                 value={password} 
                 onChange={e => setPassword(e.target.value)}/>
             
    
                 <input type="submit"  class="form-control mt-5 btnConnect"  value=" log in"/>
                 <Link to="/signUpPatient" style={{textDecoration:"none"}}><input type="submit"  class="form-control mt-3 btnAuth"  value="Create an account"/></Link>
         
             </div>
           </form>
           </div>
           <div class="col-12 col-md-12 col-lg-6 ">
              <img alt="" src={Imglogin} className="imgLogin"/>
           </div>
           </div>
           </div>
         </div>
     </section>

    )
}
