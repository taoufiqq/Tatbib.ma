import axios from "axios";
import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import alert from '../images/alert.svg'
export default  function AlertAppointment () {
  
  const history = useHistory();

//   const [status, setStatus] = useState("");
//   const [updatedStatus, setUpdatedStatus] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const id_Appointment =localStorage.getItem('idAppointment')




useEffect(()=>{

    axios.get(`http://localhost:3030/appointment/getAppointmenById/${id_Appointment}`)
    .then(function (response) {
     
      setEmail(response.data.patient.email)
      setDate(response.data.date)
      setTime(response.data.time)
      console.log(response.data.patient.email);
    }).catch(function (err) {
      console.log(err);
  });
  
  })




  


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {email,date,time};

    axios.put(`http://localhost:3030/secretary/alertAppointment/${id_Appointment}`,data)
    .then(res => {
      if(res.error){
        return false
      }else{
        console.log(res.data.date);
        history.push('/dashboardSecretary');
        toastr.success('Alert has been sent successfully')
      }
     
    })
  
  }

    return ( 
        <div className="Containerr" style={{overflow: 'hidden'}}>

  <main>
 
  <div className="table">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Appointment <b>Management Appointment</b></h2>
        </div>
      </div>
    </div>

  </div>
</div>
 <div className="col-12 col-md-6 col-lg-6 px-5 py-4 ConfirmForm">
<h2 className="h2">Reminder Appointment</h2>
<form onSubmit={handleSubmit} >
    <div className="col-12">
        <div className="input-icons mb-4">
         <img alt="" src={alert} width="60%"/>
        </div>
    </div>
    <div className="d-grid">
        <button type="submit" class="button1 py-3" style={{width:"30%",marginLeft:"35%",backgroundColor:"red"}}>Reminder</button>
    </div>
</form>
</div> 
  </main>
</div>
     );
}







