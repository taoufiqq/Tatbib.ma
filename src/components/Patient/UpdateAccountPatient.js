import axios from "axios";
import React, { useEffect, useState } from "react";
import {usenavigate } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";


export default  function UpdateAccountPatient() {
  
  const navigate  = usenavigate ();
  const id =localStorage.getItem('id_patient')

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [login, setLogin] = useState();
  const [age, setAge] = useState();
  const [telephone, setTelephone] = useState();
  const [email, setEmail] = useState();

 
  useEffect(()=>{
 
   axios.get(`https://tatbib-api.onrender.com/patient/getPatientById/${id}`)
     .then(function (response) {
         
       setFirstName(response.data.firstName)
       setLastName(response.data.lastName)
       setLogin(response.data.login)
       setAge(response.data.age)
       setTelephone(response.data.telephone)
       setEmail(response.data.email)

       console.log(response.data);
     
     }).catch(function (err) {
       console.log(err);
   });
   
   },[id])

   const handleSubmit = (e) => {
		e.preventDefault();


  

    const data = {firstName,lastName,login,age,telephone,email};

	axios.put(`https://tatbib-api.onrender.com/patient/updatePatient/${id}`,data)
    .then(res => {
    if(res.error){
      return false
    }else{
      console.log(res.data);
      navigate('myAccount')
      toastr.success('Your Account Updated successfully')
    }
		 
		})
	}

    return ( 
        <div className="Containerr" style={{overflow: 'hidden'}}>

  <main className="header-page">
 
  <div className="table">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>My Account <b>Management Account</b></h2>
        </div>
      </div>
    </div>

  </div>
</div>
 <div className="col-12 col-md-6 col-lg-6 px-5 py-4 ConfirmForm">
<h2 className="h2" style={{marginTop:"8%",paddingBottom:"8%"}}>Update My Account</h2>
<form onSubmit={handleSubmit}>
<div className="fromloginSignUp">
             <div className="row ">
             <div className="col-md-6">
                 <input  type="text" placeholder="FirstName" className="form-control" id="FirstName" required    
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  />
             </div>
            <div className="col-md-6">
                 <input  type="text" placeholder="LastName" className="form-control" id="LastName" required  
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  />
            </div>
            </div>
            <div className="row ">
            <div className="col-md-6">
                 <input  type="text" placeholder="Age" className="form-control" id="age"  required  
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  />
             </div>
             <div className="col-md-6">
                 <input  type="text"  placeholder="Télephone" className="form-control" id="tel"  required  
                 value={telephone}
                 onChange={e => setTelephone(e.target.value)}
                 />
            </div>
            </div>
            <div className="row ">
             <div className="col-md-6">
                 <input  type="text" placeholder="Email" className="form-control" id="email"  required 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
            </div>
             <div className="col-md-6">
             <input type="text"  className="form-control" id="login" placeholder="login"  
                    value={login}
                    onChange={e => setLogin(e.target.value)} 
                    /> 
             </div>
             </div>
               
         
             </div>
            
    <div className="d-grid">
        {/* <button type="submit" class="button1 py-3">Confirmer</button> */}
        <input type="submit"  className="form-control mt-5 btnConnect" id="signup" value="confirm"/>
    </div>
</form>
</div> 
  </main>
</div>
     );
}







