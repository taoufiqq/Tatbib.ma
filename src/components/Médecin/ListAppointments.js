import axios from "axios";
import React, { useEffect,useState } from "react";
import {useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import { format } from 'date-fns'
import logo from '../images/doctor.png'


const ListAppointments = () => {

    const login =localStorage.getItem('LoginMedcine');
    const id =localStorage.getItem('id_medcine')
  const history = useHistory();


  const [listAppointment, setListAppointment] = useState();




  useEffect(()=>{

    axios.get(`https://tatbib-api.herokuapp.com/appointment/getAppointmentMedcine/${id}`)
    .then(function (response) {
     
      setListAppointment(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
  },[id])

  const getIdAppointment = (id)=>{
    localStorage.setItem('idAppointment',id);
    history.push('/createOrdonnance');
  }
  const getIdPatient = (id)=>{
    localStorage.setItem('id_patient',id);
    history.push('/createOrdonnance');
  
  }
  const logOut =()=>{
    localStorage.clear()
       history.push('/loginMedcine');
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
      <li tabIndex={0} className="icon-profil"><Link to='/dashboardMedcine' style={{textDecoration:"none",color:"white"}}><span>MyAccount</span></Link></li>
      <li tabIndex={0} className="icon-customers"><Link to='/listAppointments' style={{textDecoration:"none",color:"white"}}><span>ListAppointments</span></Link></li>
      <li tabIndex={0} className="icon-users"><Link to='/listOrdonnances' style={{textDecoration:"none",color:"white"}}><span>Ordonnances</span></Link></li>
      <li tabIndex={0} className="icon-Secrétaire"><Link to='/secretaryCompte' style={{textDecoration:"none",color:"white"}}><span>Secretary</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
    <div className="helper">
         Appointemnt<span> Appointemnts | List</span>
    </div>
    {/* <p className="listRDV">Appointemnt list</p> */}
    <div className="table-responsive">
  <div className="table-wrapper">
  <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Appointemnts <b>list</b></h2>
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
          {/* <th>LastName</th>	
          <th>FirstName</th>
          <th>email</th>	
          <th>telephone</th>	 */}
          <th>DateTime</th>	          
          <th>status</th>
          <th>Ordonnance</th>
        </tr>
      </thead>
      { listAppointment && listAppointment.map(item =>(
   
      <tbody>
        <tr>
      
{/*           
          <td>{item.patient.firstName}</td>
          <td>{item.patient.lastName}</td>
          <td>{item.patient.email}</td>
          <td>{item.patient.telephone}</td> */}
          <td>{item.dateTime}</td>
          <td style={{color: item.status !== "Unconfirmed"?'color': 'red'}}>{item.status}</td>


          <td>
            <Link  onClick={() => { getIdAppointment(item._id); getIdPatient(item.patient._id);}} className="confirm" title="Writing a Ordonnance" data-toggle="tooltip" style={{visibility:  item.status !== "Unconfirmed"?'visible':'hidden'}}><i class="material-icons border_color">&#xe22b;</i></Link>
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

export default ListAppointments;