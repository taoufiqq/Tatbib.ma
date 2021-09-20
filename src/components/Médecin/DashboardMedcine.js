import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import logo from '../images/doctor.png'
import './espaceMedecin.css'

export default  function DashboardMedcine () {
  
  const history = useHistory();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [speciality, setSpeciality] = useState();
  const [city, setCity] = useState();
  const [availablity, setAvailablity] = useState();
  const [login, setLogin] = useState();




  const login_Medcine =localStorage.getItem('LoginMedcine');
  const id =localStorage.getItem('id_medcine')
  var Medecin = JSON.parse(localStorage.getItem('medcine'));
  // console.log(Medecin);

  useEffect(()=>{

    axios.get(`http://localhost:3030/medcine/getMedcineById/${id}`)
      .then(function (response) {
          
        setFullName(response.data.fullName)
        setEmail(response.data.email)
        setSpeciality(response.data.speciality)
        setCity(response.data.city)
        setAvailablity(response.data.availablity)
        setLogin(response.data.login)
        console.log(response.data);
      
      }).catch(function (err) {
        console.log(err);
    });
    
    },[id])



  const getIdMedecin = (id)=>{
    localStorage.setItem('id_medcine',id);
    history.push('/managementAvailablityMedcine');
  
  }


//-----------------------log out-----------------
  const logOut =()=>{
    localStorage.clear()
       history.push('/loginMedcine');
       toastr.success(' LogOut SuccessFully')
    }



    return ( 
        <div className="Container" style={{overflow: 'hidden'}}>
 
  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
      <img alt="" src={logo}  />
      <h6>Welcome</h6>
      <h5 style={{color:'white'}}>{login_Medcine}</h5>
    </header>
    <ul>
      <li tabIndex={0} className="icon-profil"><Link to='/dashboardMedcine' style={{textDecoration:"none",color:"white"}}><span>MyAccount</span></Link></li>
      <li tabIndex={0} className="icon-Secrétaire"><Link to='/secretaryCompte' style={{textDecoration:"none",color:"white"}}><span>Secretary</span></Link></li>
      <li tabIndex={0} className="icon-users"><span>Ordonnances</span></li>
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
          <th>FullName</th>						
          <th>Email</th>
          <th>Login</th>
          <th>Speciality</th>
          <th>City</th>
          <th>Availablity</th>
          <th>Action</th>
        </tr>
      </thead>
      {/* { medcine.map(item =>( */}
      <tbody>
        <tr>
          <td>{fullName}</td>
          <td>{email}</td>  
          <td>{login}</td>
          <td>{speciality}</td>
          <td>{city}</td>                   
          <td style={{color: availablity !== "NotAvailable"?'color': 'red'}}><span className="status text-success"></span>{availablity}</td>
          <td>
            <Link onClick={()=>getIdMedecin(Medecin._id)} className="edit" title="Edit Account" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
            <Link className="delete" title="Delete Account" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link>
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

