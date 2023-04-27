import axios from "axios";
import React, { useEffect, useState } from "react";
import {usenavigate } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

export default  function ConfirmAppointment () {
  
  const navigate  = usenavigate ();

  const [status, setStatus] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState("");

  const id =localStorage.getItem('idAppointment')




  useEffect(()=>{

    axios.get(`https://tatbib-api.onrender.com/appointment/getAppointmenById/${id}`)
    .then(function (response) {
     
      setStatus(response.data.status)
      setEmail(response.data.patient.email)
      setDateTime(response.data.dateTime)
      console.log(response.data.patient.email);
    }).catch(function (err) {
      console.log(err);
  });
  
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {status:updatedStatus,email,dateTime};

  axios.put(`https://tatbib-api.onrender.com/secretary/confirmAppointment/${id}`,data)
  .then(res => {
    if(res.error){
      return false
    }else{
      console.log(res.data);
      navigate('dashboardSecretary');
      toastr.success('Operation accomplished successfully')
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
<h2 className="h2">Confirm Appointment</h2>
<form onSubmit={handleSubmit} >
    <div className="col-12">
        <div className="input-icons mb-4">
           <select className="select p-3"
               value={updatedStatus}
               onChange={(e) => setUpdatedStatus(e.target.value)}
               >
                 <option selected>Choose a status</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Unconfirmed">Unconfirmed</option>
            </select>
        </div>
    </div>
    <div className="d-grid">
        <button type="submit" class="button1 py-3">Confirm</button>
    </div>
</form>
</div> 
  </main>
</div>
     );
}







