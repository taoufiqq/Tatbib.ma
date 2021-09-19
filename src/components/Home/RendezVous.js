import React,{useEffect,useState} from 'react'
import { Link,useHistory,useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import { DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';

export default function RendezVous() {

  const  { idMedcine } = useParams();

  const [appointmentDate, setAppointmentDate] = useState("");

  const history = useHistory();
  const token =localStorage.getItem("tokenPatient");
  const idPatient =localStorage.getItem('id_patient')

  if (!token) {
    history.push('/signUpPatient')
    toastr.warning('You must have an Account, Create it now')
  }


  // const dateValue= new Date();  
  const minDate= new Date() 

  // disable weekends
  // const disableWeekends = current => {
  //   return current.day() !== 0 && current.day() !== 6;
  // }


// ------------------------------- get information medcine's Appointment  ------------------------------
useEffect(()=>{
    axios.get(`http://localhost:3030/medcine/getMedcineById/${idMedcine}`)
    .then(function (response) {
           console.log(response.data);
    }).catch(function (err) {
      console.log(err);
  });
 },[idMedcine])  
  

 const handleSubmit = (e) => {
  e.preventDefault();
const Appointment = {appointmentDate,medcine:idMedcine,patient:idPatient};

axios.post(`http://localhost:3030/appointment/addAppointment`,Appointment)
    
  .then(res => {
      if(res.error){
          return false
      }else{
    // console.log(res.data);
          if (appointmentDate) {
            
          }
          history.push('/dashboardPatient')
          toastr.success(' Appointment Reserved Successfully')
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
    <div class="blog-slider__title"><h5 style={{color:'#2ca5b8'}}>Select a date and time  to take an <b>Appointment</b></h5></div>
             <DateTimePickerComponent id="datetimepicker"
              placeholder="Select a date and time" 
              // value={dateValue}
              min={minDate}
              // isValidDate={disableWeekends}
              required    
              value={appointmentDate}
              onChange={e => setAppointmentDate(e.target.value)}
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
