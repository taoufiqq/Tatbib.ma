import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import logo from '../images/logo.png'
import './espaceMedecin.css'

export default  function SecretaryCompte () {
  
  const history = useHistory();
  const [secretary, setSecretary] = useState();
  const login =localStorage.getItem('LoginSecretary')

  useEffect(()=>{

    axios.get(`http://localhost:3030/medcine/getAllSecretary`)
      .then(function (response) {
          
        setSecretary(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })



//-----------------------log out-----------------
  const logOut =()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('LoginMedcine')
    localStorage.removeItem('ValidateCompte')
       history.push('/loginMedcine');
    }



    return ( 
        <div className="Container">
 
  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
      <img alt="" src={logo}  />
      <h6>Welcome</h6>
      <h5 style={{color:'white'}}>{login}</h5>
    </header>
    <ul>
    <li tabIndex={0} className="icon-profil"><Link to='/dashboardMedcine' style={{textDecoration:"none",color:"white"}}><span>Profil</span></Link></li>
      <li tabIndex={0} className="icon-Secrétaire"><Link to='/secretaryCompte' style={{textDecoration:"none",color:"white"}}><span>Secretary</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
 
  <div className="table-responsive">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Secretary <b>Management</b></h2>
        </div>
        {/* <div className="col-sm-7">
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New User</span></a>
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Export to Excel</span></a>						
        </div> */}
      </div>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>FullName</th>						
          <th>Email</th>
          <th>Login</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      { secretary && secretary.map(item =>(
      <tbody>
        <tr>
      
          <td>{item.fullName}</td>
          <td>{item.email}</td>  
          <td>{item.login}</td>                 
          <td><span className="status text-success">•</span>{item.status}</td>
          <td>
            <Link className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
            <Link className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link>
          </td>
        </tr>

      </tbody>
         ))}
    </table>
  </div>
</div>
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

</div>
  </main>
</div>
     );
}

