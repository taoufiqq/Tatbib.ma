import React, {useState} from 'react'
import { Link,usenavigate  } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import './login.css'
export default function SignUpPatient() {


    const navigate  = usenavigate ();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");



//---------add admin------------- 

const handleSubmit = (e) => {
    e.preventDefault();




const Patient = {firstName,lastName,age,telephone,email,password,login};

axios.post(`https://tatbib-api.onrender.com/patient/authentication`,Patient)
      
    .then(res => {
        if(res.error){
            return false
        }else{
      console.log(res.data);
      navigate ('/loginPatient')
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
          <div className="row ">
          <div>
           <form className="row"  method="#" action="#" onSubmit={handleSubmit}>
           <label className="form-label">Sign Up</label>
             <div className="fromloginSignUp">
             <div className="row ">
             <div className="col-md-6">
                 <input  type="text" placeholder="FirstName" className="form-control" id="FirstName" required    
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}/>
             </div>
            <div className="col-md-6">
                 <input  type="text" placeholder="LastName" className="form-control" id="LastName" required  
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}/>
            </div>
            </div>
            <div className="row ">
            <div className="col-md-6">
                 <input  type="text" placeholder="Age" className="form-control" id="age"  required  
                  value={age}
                  onChange={e => setAge(e.target.value)}/>
             </div>
             <div className="col-md-6">
                 <input  type="text"  placeholder="Télephone" className="form-control" id="tel"  required  
                 value={telephone}
                 onChange={e => setTelephone(e.target.value)}/>
            </div>
            </div>
            <div className="row ">
             <div className="col-md-6">
                 <input  type="text" placeholder="Email" className="form-control" id="email"  required 
                  value={email}
                  onChange={e => setEmail(e.target.value)}/>
            </div>
             <div className="col-md-6">
                 <input type="password" placeholder="Password" className="form-control " id="password"  required 
                 value={password}
                onChange={e => setPassword(e.target.value)}/>
             </div>
             </div>
                 <input type="text"  className="form-control" id="login" placeholder="login"  
                    value={login}
                    onChange={e => setLogin(e.target.value)} /> 
         
             </div>
             <div>
                 <input type="submit"  className="form-control mt-5 btnConnect" id="signup" value="confirm"/>
                 <Link to="/loginPatient" style={{textDecoration:"none"}}><input type="submit"  className="form-control mt-3 btnAuth"  value="I already have an account"/></Link>
         
             </div>
           </form>
           </div>
           </div>
           </div>
         </div>
     </section>

    )
}
