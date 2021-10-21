import React, { useEffect,useState } from "react";
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import toastr from 'toastr';
import "toastr/build/toastr.css";

export default function CreateOrdonnances() {

    const history = useHistory();

    const [fullNameDoctor, setFullNameDoctor] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [firstNamePatient, setFirstNamePatient] = useState("");
    const [lastNamePatient, setLastNamePatient] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [medicamment, setMedicamment] = useState("");

    // const [password, setPassword] = useState("");


    // const [appointment, setAppointment] = useState();
  // const id=localStorage.getItem('id_medcine'); 
  const idAppointment=localStorage.getItem('idAppointment'); 
  const idPatient =localStorage.getItem('id_patient')
  const idMedcine =localStorage.getItem('id_medcine')
  console.log(idPatient);
  console.log(idMedcine);
    useEffect(()=>{

      axios.get(`https://tatbib-api.herokuapp.com/appointment/getAppointmenById/${idAppointment}`)
      .then(function (response) {
       
        setFullNameDoctor(response.data.medcine.fullName)
        setSpeciality(response.data.medcine.speciality)
        setFirstNamePatient(response.data.patient.firstName)
        setLastNamePatient(response.data.patient.lastName)
        setDate(response.data.date)
        setTime(response.data.time)
      }).catch(function (err) {
        console.log(err);
    });
    
    },[idAppointment])


const handleSubmit = (e) => {
    e.preventDefault();




const Ordonnance = {date,time,medcine:idMedcine,patient:idPatient,medicamment};

axios.post(`https://tatbib-api.herokuapp.com/medcine/addOrdonnance`,Ordonnance)
      
    .then(res => {
        if(res.error){
            return false
        }else{
      console.log(res.data);
      history.push('/listAppointments')
      toastr.success('Ordonnance added SuccessFully')
        }
     
    })
}
  return (

  <section className="header-page noPrint">
    <div className="container">
           <div className="row justify-content-between py-3 align-items-center">
                    <div className="col-12 col-sm-3 col-lg-4 d-flex justify-content-center justify-content-lg-start py-2 py-lg-0">
                        <Link to="/"><img alt="" src={logo} width="100px"/></Link>
                    </div>                  
           </div>
      <div className="cardOrdonnance">
           <img alt="" src={logo} width="100px"/>
        <div className="row ">



          <div>      
           <form className="row"  method="#" action="#" onSubmit={handleSubmit}>
                 <label className="OrdonnanceDate"><span  style={{color:'red'}}>Dr </span>{fullNameDoctor}</label>
                 <label className="OrdonnanceDate" style={{color:'green'}}>{speciality}</label>
                   <div>
                     <label className="OrdonnanceDoctor" ><span style={{color:'red'}}>Mr/Mme </span >{firstNamePatient} {lastNamePatient}</label>
                   </div>
  
              <div className="fromloginSignUp">
                <div className="row ">
                   <label className="dateOrdonnance">{date}</label>
                   <label className="timeOrdonnance" >{time}</label>
                </div>
               </div>
               <div class="form-floating">
                   <textarea class="form-control" placeholder="medicamment" id="floatingTextarea2" style={{height:"300px"}}
                   value={medicamment}
                   onChange={e => setMedicamment(e.target.value)} 
                   ></textarea>
               </div>
               <div>
                 <input type="submit"  className="form-control mt-5 btnConnect"  value="Confirm"/>
               </div>
           </form>
          </div>
     





        </div>
      </div>
    </div>
  </section>

    )
}
