import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

import logo from '../images/logo.png'
import './espaceMedecin.css'

export default  function ManagementCompteSecretary () {
  
  const history = useHistory();
  const [secretary, setSecretary] = useState();




    return ( 
        <div className="Containerr">

  <main>
 
  <div className="table-responsive">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Secretary <b>Management</b></h2>
        </div>
        {/* <div className="col-sm-7">
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New User</span></a>
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Export to Excel</span></a>						
        </div> */}
      </div>
    </div>

  </div>
</div>
 <div className="col-12 col-md-6 col-lg-6 px-5 py-4" style={{background: "white", borderRadius: '7px',marginLeft:'26%',textAlign:'center'}}>
<h2 className="h2">Trouvez votre médecin et prenez rendez-vous en consultation cabinet</h2>
<form action="/search/vols" method="POST" className="py-5">
    <div className="col-12">
        <div className="input-icons mb-4">
            <i className="far fa-calendar-alt icon" />
            <input className="inpt p-3" type="text" name="name" placeholder="Médecin ..." />
        </div>
        <div className="input-icons mb-4">
            <select className="select p-3">
                <option selected value="Choisir Une Spécialité">Choisir Une Spécialité</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="=mango">Mango</option>
            </select>
        </div>
        <div className="input-icons mb-4">
            <select className="select p-3">
                <option selected value="Choisir Une Ville">Choisir Une Ville</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        </div>
    </div>
    <div class="d-grid">
        <button type="submit" class="button1 py-3">Rechercher</button>
    </div>
</form>
</div> 
  </main>
</div>
     );
}







