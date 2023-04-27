import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate  ,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import logo from '../images/doctor.png'
import './espaceMedecin.css'

export default  function SecretaryCompte () {
  
  const navigate  = useNavigate  ();
  // const [secretary, setSecretary] = useState();
  const login =localStorage.getItem('LoginMedcine')

    const [listSecretary, setListSecretary] = useState();
        
    const loginMedcine=localStorage.getItem('LoginMedcine'); 

    axios.get(`https://tatbib-api.onrender.com/medcine/getSecretaryByMedcineName/${loginMedcine}`)
    .then(function (response) {
        
      setListSecretary(response.data)
    }).catch(function (err) {
      console.log(err);
  });




    const getIdSecretary = (id)=>{
      localStorage.setItem('idSecretary',id);
      navigate('managementCompteSecretary');
    
    }


  // delete My Account  
  const deleteAccountSecretary = (id)=>{
    var msgConfirmation = window.confirm("Are You Sure Yo want to delete this Account ?");
    if (msgConfirmation) {   
    axios.delete(`https://tatbib-api.onrender.com/medcine/deleteSecretary/${id}`)
    .then(function (response) {
        window.location.reload();
      console.log('item was deleted Succesfully ... ');
      toastr.success(' Account was deleted SuccessFully')
    
    })
    
  
  }
}




//-----------------------log out-----------------
  const logOut =()=>{
    localStorage.clear()
       navigate('loginMedcine');
       toastr.success(' LogOut SuccessFully')
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
      <li tabIndex={0} className="icon-profil"><Link to='/dashboardMedcine' style={{textDecoration:"none",color:"white"}}><span>MyAccount</span></Link></li>
      <li tabIndex={0} className="icon-customers"><Link to='/listAppointments' style={{textDecoration:"none",color:"white"}}><span>ListAppointments</span></Link></li>
      <li tabIndex={0} className="icon-users"><Link to='/listOrdonnances' style={{textDecoration:"none",color:"white"}}><span>Ordonnances</span></Link></li>
      <li tabIndex={0} className="icon-Secrétaire"><Link to='/secretaryCompte' style={{textDecoration:"none",color:"white"}}><span>Secretary</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
  <div className="helper">
         Secretary Account<span> Secretary | Management</span>
    </div>
  <div className="table-responsive">
  <div className="table-wrapper">
  <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
        <h2>Account <b>Management</b></h2>
        </div>
        <div className="col-sm-7">
        <Link to="/createAccountSecretary" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New Secretary</span></Link>

        </div>
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
      { listSecretary && listSecretary.map(item =>(
      <tbody>
        <tr>
      
          <td>{item.fullName}</td>
          <td>{item.email}</td>  
          <td>{item.login}</td>                 
          <td  style={{color: item.status !== "InActive"?'color': 'red'}}><span className="status text-danger"></span>{item.status}</td>
          <td>
            <Link onClick={()=>getIdSecretary(item._id)} className="edit" title="Active Account Secretary" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
            <Link  onClick={()=>deleteAccountSecretary(item._id)} className="delete" title="Delete Account Secretary" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link>
          </td>
        </tr>

      </tbody>
         ))}
    </table>
  </div>
</div>
  </main>
</div>
     );
}

