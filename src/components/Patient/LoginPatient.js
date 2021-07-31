import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import login from '../images/login.svg'
import './login.css'
export default function LoginPatient() {
    return (
        <div className="container-fluid">
        <div className="header">
            <Link to="/"> <img src={logo} className="logo1" alt=""/></Link>

      </div>
      <div className="EspacePatient">
      <div className="row">
 
 <div className="col-12 col-md-9 col-lg-6">

<h4>Se Connecter</h4>
<form action="/search/vols" method="POST" className="py-5">
<div className="col-lg-8  mx-auto">
<div className="input-icons mb-4">
<input className="inptLogin" type="text" name="name" placeholder="Email" />
</div>
<div className="input-icons mb-4">
<input className="inptLogin" type="text" name="name" placeholder="Password" />
</div>
</div>
<button type="submit" className="buttonLogin mb-2">Se Connecter</button>
<button type="submit" className="buttonSignIn">Creé un compte</button>
</form>

</div>
 <div className="col-12 col-md-3 col-lg-6 Login">
   <img className="Login_img" src={login} className="rounded" />
  </div>
</div>
      </div>
    

</div>
    )
}
