import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams, useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import { format } from 'date-fns'
import logo from '../images/ss.jpg'


export default  function DashboardSecretary () {
  const history = useHistory();


  const login =localStorage.getItem('LoginSecretary')
  const id =localStorage.getItem('login_medcine')

  const [listAppointment, setListAppointment] = useState();


  useEffect(()=>{

    axios.get(`https://tatbib-api.herokuapp.com/appointment/getAppointmentSecretary/${id}`)
    .then(function (response) {
     
      setListAppointment(response.data)
   
    }).catch(function (err) {
      console.log(err);
  });
  
  },[id])


    // delete My Account  
    const deleteAppointment = (id)=>{
      var msgConfirmation = window.confirm("Are You Sure Yo want to delete this Appointment ?");
      if (msgConfirmation) {   
      axios.delete(`https://tatbib-api.herokuapp.com/secretary/deleteAppointment/${id}`)
      .then(function (response) {
          window.location.reload();
        console.log('item was deleted Succesfully ... ');
        toastr.success(' Appointment was deleted SuccessFully')
      
      })
      
    
    }
  }
  const getIdAppointment = (id)=>{
    localStorage.setItem('idAppointment',id);
    history.push('/confirmAppointment');
  
  }

  const alertAppointment = (id)=>{
    localStorage.setItem('idAppointment',id);
    history.push('/alertAppointment');
  
  }





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
      <img alt="" src={logo} style={{borderRadius:'50%',width:'80px'}} />
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
  <div className="helper">
          Appointemnt<span> Management | Appointemnt</span>
    </div>
    {/* <p className="listRDV">Appointemnt list</p> */}
    <div className="table-responsive">
  <div className="table-wrapper">
  <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Appointemnt <b>list</b></h2>
        </div>
      </div>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>LastName</th>	
          <th>FirstName</th>
          <th>email</th>	
          <th>telephone</th>	
          <th>DateTime</th>	
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      { listAppointment && listAppointment.map(item =>(
      <tbody>
        <tr>
          <td>{item.patient.firstName}</td>
          <td>{item.patient.lastName}</td>
          <td>{item.patient.email}</td>
          <td>{item.patient.telephone}</td>
          <td>{item.dateTime}</td>
          <td style={{color: item.status !== "Unconfirmed"?'color': 'red'}}>{item.status}</td>

          <td>
        
            <Link onClick={()=>alertAppointment(item._id)} className="edit" title="Alert Appointment" data-toggle="tooltip">  <i class="material-icons add_alert">&#xe003;</i></Link>
            <Link onClick={()=>getIdAppointment(item._id)}  className="confirm" title="Confirm Appointment" data-toggle="tooltip"><i class="material-icons done_outline">&#xe92f;</i></Link>
            <Link  className="edit" title="Edit Appointment" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
            <Link onClick={()=>deleteAppointment(item._id)} className="delete" title="Delete Appointment" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link>
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

