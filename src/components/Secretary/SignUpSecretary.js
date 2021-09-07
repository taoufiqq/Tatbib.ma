import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'

export default function SignUpSecretary() {


    const history = useHistory();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");



//---------add admin------------- 

const handleSubmit = (e) => {
    e.preventDefault();




const Secretary = {fullName,email,password,login};

axios.post(`http://localhost:3030/secretary/authentication`,Secretary)
      
    .then(res => {
        if(res.error){
            return false
        }else{
      console.log(res.data);
      history.push('/loginSecretary')
        }
     
    })
}
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
          <div className="row ">
          <div>
           <form className="row"  method="#" action="#" onSubmit={handleSubmit}>
           <label className="form-label">Sign Up</label>
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
                 <input type="submit"  className="form-control mt-5 btnConnect" id="signup" value="Confirmer"/>
                 <Link to="/loginSecretary" style={{textDecoration:"none"}}><input type="submit"  className="form-control mt-3 btnAuth"  value="J'ai déja un compte "/></Link>
         
             </div>
           </form>
           </div>
           </div>
           </div>
         </div>
     </section>

    )
}
