import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import logo from '../images/logo.png'

export default  function AccountPatient () {
  
  const history = useHistory();
//   const [medcine, setMedcine] = useState();
 const loginPatient =localStorage.getItem('LoginPatient')
 const id =localStorage.getItem('id_patient')
 const [firstName, setFirstName] = useState();
 const [lastName, setLastName] = useState();
 const [login, setLogin] = useState();
 const [age, setAge] = useState();
 const [telephone, setTelephone] = useState();
 const [email, setEmail] = useState();


 useEffect(()=>{

  axios.get(`http://localhost:3030/patient/getPatientById/${id}`)
    .then(function (response) {
        
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setLogin(response.data.login)
      setAge(response.data.age)
      setTelephone(response.data.telephone)
      setEmail(response.data.email)
      console.log(response.data);
    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[id])


  const getIdPatient = (id)=>{
    localStorage.setItem('id_patient',id);
    history.push('/updateMyAccount');
  
  }

  // delete My Account  
  const deleteAccount = (id)=>{
    var msgConfirmation = window.confirm("Are You Sure Yo want to delete this Account ?");
    if (msgConfirmation) {   
    axios.delete(`http://localhost:3030/patient/deletePatient/${id}`)
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
       history.push('/loginPatient');
       toastr.success(' LogOut SuccessFully')
    }



    return ( 
        <div className="Container" style={{overflow: 'hidden'}}>
 
  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
      <img alt="" src={logo}  />
      <h6>Welcome</h6>
      <h5 style={{color:'white'}}>{loginPatient}</h5>
    </header>
    <ul>
      <li tabIndex={0} className="icon-customers"><Link to='/dashboardPatient' style={{textDecoration:"none",color:"white"}}><span>Appointment</span></Link></li>
      <li tabIndex={0} className="icon-users"><Link  style={{textDecoration:"none",color:"white"}}><span>Ordonnances</span></Link></li>
      <li tabIndex={0} className="icon-profil"><Link to='/myAccount' style={{textDecoration:"none",color:"white"}}><span>MyAccount</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
 
  <div className="table-responsive">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Account <b>Management</b></h2>
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
          <th>FirstName</th>		
          <th>LastName</th>	          
          <th>Login</th>
          <th>Age</th>
          <th>Telephone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      {/* { medcine && medcine.map(item =>( */}
      <tbody>
        <tr>
      
          <td>{firstName}</td>
          <td>{lastName}</td>  
          <td>{login}</td>  
          <td>{age}</td>
          <td>{telephone}</td>                          
          <td>{email}</td>
          <td>
            <Link onClick={()=>getIdPatient(id)} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
            <Link onClick={()=>deleteAccount(id)} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link>
          </td>
        </tr>

      </tbody>
         {/* ))} */}
    </table>
  </div>
</div>
  </main>
</div>
     );
}
