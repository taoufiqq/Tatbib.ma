import React,{useEffect,useState} from 'react'
import { useHistory,useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import {DatePickerComponent,TimePickerComponent} from '@syncfusion/ej2-react-calendars';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import { format } from 'date-fns'

export default function RendezVous() {

  const  { idMedcine } = useParams();
  const  { login } = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const history = useHistory();
  const token =localStorage.getItem("tokenPatient");
  const idPatient =localStorage.getItem('id_patient')

// let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  // const date1 = format(date)
  // console.log( format(date));

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

  //   // const date1 = format(date)
  // // const time1 = format(time)
  // console.log( format(date));
const Appointment = {date,time,medcine:idMedcine,patient:idPatient,loginMedcine:login};

axios.post(`http://localhost:3030/appointment/addAppointment`,Appointment)
    
  .then(res => {

  if(res.error){
         return false
  }else{
      // let id= res.data._id;
      localStorage.setItem('id_appointment',res.data._id);
      history.push('/dashboardPatient')
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
    <div class="blog-slider__title"><h5 style={{color:'#2ca5b8'}}>Select a date and time  to take an <b>Appointment</b></h5></div>
              {/* <DayPicker
                     disabledDays={[new Date(), { daysOfWeek: [0, 6] }]}
             /> */}
              <DatePickerComponent
                placeholder="Select a date"
                min={minDate}
                disabledDays={{daysOfWeek: [0, 6]}}
                value={date}
                onChange={e => setDate(e.target.value)}
              ></DatePickerComponent> 
              <TimePickerComponent
                placeholder="Select a time"              
           
                value={time}
                onChange={e => setTime(e.target.value)} 
              ></TimePickerComponent>
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
