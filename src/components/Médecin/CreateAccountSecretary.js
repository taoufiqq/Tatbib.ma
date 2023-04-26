import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import toastr from 'toastr';
import "toastr/build/toastr.css";

export default function CreateAccountSecretary() {

    // var Medecin = JSON.parse(localStorage.getItem('medcine'));
    const history = useHistory();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    // const id=localStorage.getItem('id_medcine');  
    const LoginMedcine=localStorage.getItem('LoginMedcine'); 

//---------add admin------------- 

const handleSubmit = (e) => {
    e.preventDefault();




const Secretary = {fullName,email,password,login,loginMedcine:LoginMedcine};

axios.post(`https://tatbib-api.onrender.com/medcine/createAccountSecretary`,Secretary)
      
    .then(res => {
        if(res.error){
            return false
        }else{
      console.log(res.data);
      history.push('/secretaryCompte')
      toastr.success('Secretary added SuccessFully')
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
                  
                </div>
           <div className="card EspacePatient">
          <div className="row ">
          <div>
           <form className="row"  method="#" action="#" onSubmit={handleSubmit}>
           <label className="form-label">Create Compte Secretary</label>
             <div className="fromloginSignUp">
             <div className="row ">
             <div className="col-md-6">
                 <input  type="text" placeholder="FullName" className="form-control" id="fullName" required    
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}/>
             </div>
             <div className="col-md-6">
                 <input  type="text" placeholder="Email" className="form-control" id="email"  required 
                  value={email}
                  onChange={e => setEmail(e.target.value)}/>
            </div>
            </div>
            <div className="row ">
             <div className="col-md-6">
                   <input type="text"  className="form-control" id="login" placeholder="login"  
                    value={login}
                    onChange={e => setLogin(e.target.value)} /> 
               
            </div>
             <div className="col-md-6">
                 <input type="password" placeholder="Password" className="form-control " id="password"  required 
                  value={password}
                  onChange={e => setPassword(e.target.value)}/>
             </div>
             </div>

         
             </div>
             <div>
                 <input type="submit"  className="form-control mt-5 btnConnect" id="signup" value="Confirm"/>
         
             </div>
           </form>
           </div>
           </div>
           </div>
         </div>
     </section>

    )
}
