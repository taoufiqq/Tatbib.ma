import React, { useState } from 'react';
import {Link,useHistory } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import logo from '../images/logo.png';
import Imglogin from '../images/Login2.svg'
import LoginMedcine from '../Médecin/LoginMedcine';

export default function LoginSecretary() {


    const history = useHistory();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();




    const handleSubmit = (e) => {
        e.preventDefault();

    const Secretary = {login,password};

    axios.post(`http://localhost:3030/secretary/login`,Secretary)
		.then(res => {
            console.log(res)
        if(!res.data.message){ 
            let status= res.data.status;
            localStorage.setItem("status", status);
            if(status === "InActive"){
              
              toastr.error("You can't use this Account now, Please wait for it to be activated!!!")
            }else if (status === "Block"){
            toastr.error('This Account is Blocked!!!')
          }else{
             let tokenSecretary= res.data.tokenSecretary;
             let roleSecretary= res.data.roleSecretary;
             let loginMedcine= res.data.loginMedcine;
             console.log(loginMedcine);
             localStorage.setItem("tokenSecretary", tokenSecretary);
             localStorage.setItem("LoginSecretary", login);
             localStorage.setItem("roleSecretary", roleSecretary);
             localStorage.setItem("login_medcine", loginMedcine);
             history.push('/dashboardSecretary');
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
          <div class="col-12 col-md-12 col-lg-6 " style={{marginTop:'5%'}}>
           <form class="row"  onSubmit={handleSubmit}>
           <label class="form-label">Se Connecter en tant que Secrétaire</label>
             <div className="fromlogin">
            
                 <input  type="text" placeholder="Login" class="form-control"  required  
                 value={login} 
                 onChange={e => setLogin(e.target.value)}/>
       
                 <input type="password" placeholder="Password" class="form-control "   required 
                 value={password} 
                 onChange={e => setPassword(e.target.value)}/>
             
    
                 <input type="submit"  class="form-control mt-5 btnConnect"  value=" log in"/>
         
             </div>
           </form>
           </div>
           <div class="col-12 col-md-12 col-lg-6 ">
              <img alt="" src={Imglogin} style={{width:"70%",marginLeft:"60px"}} className="imgLogin"/>
           </div>
           </div>
           </div>
         </div>
     </section>

    )
}
