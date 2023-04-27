import React,{useEffect,useState} from 'react'
import { usenavigate ,useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";


export default function RendezVous() {

  const  { idMedcine } = useParams();
  const  { login } = useParams();

  const [dateTime, setDateTime] = useState("");
 
 

  const navigate  = usenavigate ();
  const token =localStorage.getItem("tokenPatient");
  const idPatient =localStorage.getItem('id_patient')

  if (!token) {
    navigate('signUpPatient')
    toastr.warning('You must have an Account, Create it now')
  }

// ------------------------------- get information medcine's Appointment  ------------------------------
useEffect(()=>{
    axios.get(`https://tatbib-api.onrender.com/medcine/getMedcineById/${idMedcine}`)
    .then(function (response) {
           console.log(response.data);
    }).catch(function (err) {
      console.log(err);
  });
 },[idMedcine])  


 const handleSubmit = (e) => {
  e.preventDefault();





const Appointment = {dateTime,medcine:idMedcine,patient:idPatient,loginMedcine:login};

axios.post(`https://tatbib-api.onrender.com/appointment/addAppointment`,Appointment)
    
  .then(res => {
  console.log(res.data.error);
  if(res.data.error === true){
         toastr.error('this date has aleready reserved,Please choose another date')
         navigate('resultSearchMedcine')
  }else{
      localStorage.setItem('id_appointment',res.data._id);
      navigate('dashboardPatient')
      toastr.success(' Appointment Reserved Successfully')
      console.log(res.data);
  }

})
}
return (

    <div className="container-fluid px-0" style={{overflow: 'auto'}}>
        <section className="header-page">
            <div className="container">
                <div class="row justify-content-between py-3 align-items-center">
                    <div class="col-12 col-sm-3 col-lg-4 d-flex justify-content-center justify-content-lg-start py-2 py-lg-0">
                        <img alt=""  width="100px"/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                <div class="blog-slider mt-5">

<div class="blog-slider__wrp swiper-wrapper">
  <div class="blog-slider__item swiper-slide">
    <div class="blog-slider__img">
      <img src={logo} alt=""/>
    </div>
    <form  onSubmit={handleSubmit}>
    <div class="blog-slider__content">
    <div class="blog-slider__title"><h5 style={{color:'#2ca5b8'}}>Choose a time for your <b>Appointment :</b></h5></div>
   

      <input type="datetime-local" id="meeting-time"
       name="meeting-time"
       min={Date.now()}
       value={dateTime}
       onChange={e => setDateTime(e.target.value)}
       />
      <button type="submit"  class="blog-slider__button mt-5 s" style={{outline:"none"}}>Confirm</button>
   </div>
   </form>
  </div>
  
</div> 

{/* <div class="blog-slider__pagination"></div> */}

</div> 

                </div>
            </div>
        </section>
                    
     
            
        </div>     
  )
}
