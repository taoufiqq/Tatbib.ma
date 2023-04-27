import axios from "axios";
import React, { useEffect,useState } from "react";
import {usenavigate ,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import './login.css'
import { format } from 'date-fns'
import logo from '../images/user.jpg'


const DashboardPatient = () => {

  const login =localStorage.getItem('LoginPatient')
  const navigate  = usenavigate ();


  const id =localStorage.getItem('id_patient')
  const [listAppointment, setListAppointment] = useState();




  useEffect(()=>{

    axios.get(`https://tatbib-api.onrender.com/appointment/getAppointmenPatient/${id}`)
    .then(function (response) {
     
      setListAppointment(response.data)

      // toLocaleDateString
    }).catch(function (err) {
      console.log(err);
  });
  
  },[id])

  // delete My Account  
  // const deleteAppointment = (id)=>{
  //   var msgConfirmation = window.confirm("Are You Sure Yo want to delete this Account ?");
  //   if (msgConfirmation) {   
  //   axios.delete(`https://tatbib-api.onrender.com/patient/deleteAppointment/${id}`)
  //   .then(function (response) {
  //       window.location.reload();
  //     console.log('item was deleted Succesfully ... ');
  //     toastr.success('Appointment was deleted SuccessFully')
    
  //   })
    
  
//   }
// }

  const logOut =()=>{

    localStorage.clear();
       navigate ('/loginPatient');
       toastr.success(' LogOut SuccessFully')
    }



    return ( 
        <div className="Container">
 
  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
    <img alt="" src={logo} style={{borderRadius:'50%'}} />
      <h6>Welcome</h6>
      <h5 style={{color:'white'}}>{login}</h5>
    </header>
    <ul>
      <li tabIndex={0} className="icon-customers"><span>Appointment</span></li>
      <li tabIndex={0} className="icon-users"><Link to='/listOrdonnancesPatient' style={{textDecoration:"none",color:"white"}}><span>Ordonnances</span></Link></li>
      <li tabIndex={0} className="icon-profil"><Link to='/myAccount' style={{textDecoration:"none",color:"white"}}><span>MyAccount</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
    <div className="helper">
          My Appointemnt<span> Management | Appointemnt</span>
    </div>
    {/* <p className="listRDV">Appointemnt list</p> */}
    <div className="table-responsive">
  <div className="table-wrapper">
  <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Appointemnt <b>list</b></h2>
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
          <th>Speciality</th>			
          <th> Date and Time</th>	          
          <th>status</th>
        </tr>
      </thead>
      { listAppointment && listAppointment.map(item =>(
   
      <tbody>
        <tr>
      
          
          <td>{item.medcine.fullName}</td>
          <td>{item.medcine.speciality}</td>
          <td>{item.dateTime}</td>
          <td style={{color: item.status !== "Unconfirmed"?'color': 'red'}}>{item.status}</td>

          <td>
            {/* <Link onClick={()=>deleteAppointment(id)}  className="delete" title="Delete Appointment" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link> */}
          </td>
        </tr>

      </tbody>
       ))} 
    </table>
  </div>
</div>

    <Link to="/searchMedcine" style={{textDecoration:"none"}}><input type="button"  className="form-control mt-5 btnConnect rendez-vous" id="Rdv" value="Prendre un rendez-vous "/></Link>
  </main>
</div>
     );
}

export default DashboardPatient;