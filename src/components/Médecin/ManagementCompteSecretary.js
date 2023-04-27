import axios from "axios";
import React, { useEffect, useState } from "react";
import {usenavigate } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import './espaceMedecin.css'

export default  function ManagementCompteSecretary () {
  
  const navigate  = usenavigate ();

  const [status, setStatus] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const id_Secretary =localStorage.getItem('idSecretary')




  useEffect(()=>{

    axios.get(`https://tatbib-api.onrender.com/medcine/getSecretaryById/${id_Secretary}`)
    .then(function (response) {
     
      setStatus(response.data.status)
   
    }).catch(function (err) {
      console.log(err);
  });
  
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {status:updatedStatus};

  axios.put(`https://tatbib-api.onrender.com/medcine/activateCompteSecretary/${id_Secretary}`,data)
  .then(res => {
    if(res.error){
      return false
    }else{
      console.log(res.data);
      navigate ('/secretaryCompte');
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
          <h2>Secretary <b>Management Compte</b></h2>
        </div>
      </div>
    </div>

  </div>
</div>
 <div className="col-12 col-md-6 col-lg-6 px-5 py-4 ConfirmForm">
<h2 className="h2">Activate Account Secretary</h2>
<form  onSubmit={handleSubmit}>
    <div className="col-12">
        <div className="input-icons mb-4">
           <select className="select p-3"
               value={updatedStatus}
               onChange={(e) => setUpdatedStatus(e.target.value)}>
                 <option selected>Choose a status</option>
                <option value="InActive">InActive</option>
                <option value="Active">Active</option>
                <option value="Block">Block</option>
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







