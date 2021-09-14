import axios from "axios";
import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import './espaceMedecin.css'

export default  function ManagementAvailablityMedcine () {
  
  const history = useHistory();

  const [availablity, setAvailablity] = useState("");
  const [updatedAvailablity, setUpdatedAvailablity] = useState("");
  const id =localStorage.getItem('id_medcine')

  useEffect(()=>{

    axios.get(`http://localhost:3030/medcine/getMedcineById/${id}`)
    .then(function (response) {
     
        setAvailablity(response.data.availablity)
    }).catch(function (err) {
      console.log(err);
  });
  
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {availablity:updatedAvailablity};

  axios.put(`http://localhost:3030/medcine/updateAvailablityMedcine/${id}`,data)
  .then(res => {
    if(res.error){
      return false
    }else{
      history.push('/dashboardMedcine');
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
          <h2>Medcine <b>Management Availablity</b></h2>
        </div>
      </div>
    </div>
  </div>
</div>
 <div className="col-12 col-md-6 col-lg-6 px-5 py-4 ConfirmForm">
<h2 className="h2">Update Availablity</h2>
<form  onSubmit={handleSubmit}>
    <div className="col-12">
        <div className="input-icons mb-4">
           <select className="select p-3"
               value={updatedAvailablity}
               onChange={(e) => setUpdatedAvailablity(e.target.value)}>
                <option selected>Choose your Availablity</option>
                <option value="Available">Available</option>
                <option value="NotAvailable">NotAvailable</option>
            </select>
        </div>
    </div>
    <div className="d-grid">
        <button type="submit" class="button1 py-3">confirm</button>
    </div>
</form>
</div> 
  </main>
</div>
     );
}







