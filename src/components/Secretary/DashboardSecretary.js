import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import logo from '../images/logo.png'


export default  function DashboardSecretary () {



  const login =localStorage.getItem('LoginSecretary')

  const history = useHistory();
  const logOut =()=>{
    localStorage.clear()
       history.push('/loginSecretary');
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
      <li tabIndex={0} className="icon-customers"><Link style={{textDecoration:"none",color:"white"}}><span>Appointment</span></Link></li>
      <li tabIndex={0} className="icon-folder"><Link style={{textDecoration:"none",color:"white"}}><span>Patient Record</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
  <div className="table-responsive">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Appointment <b>Management</b></h2>
        </div>
        {/* <div className="col-sm-7">
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New User</span></a>
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Export to Excel</span></a>						
        </div> */}
      </div>
    </div>
    </div>
    </div>
  </main>
</div>
     );
}

