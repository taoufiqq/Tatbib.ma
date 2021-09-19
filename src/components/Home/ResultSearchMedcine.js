import React,{useEffect,useState} from 'react'
import { Link,useHistory,useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";

export default function ResultSearchMedcine() {
  // let { idMedcine } = useParams();

  const history = useHistory();
  const token =localStorage.getItem("tokenPatient");
  var medecin = JSON.parse(localStorage.getItem('medcine'));
  console.log(medecin);

//   const id =localStorage.getItem('medcine')

//   const getIdMedcine =()=>{
//       axios.get(`http://localhost:3030/medcine/getMedcineById/${id}`)
//       .then(function (response) {
//       }).catch(function (err) {
//         console.log(err);
//     });

// }

  // const makeAppointment =()=>{
  //   onClick={()=>{makeAppointment()}} 
  //    if (!token) {
  //      history.push('/signUpPatient')
  //      toastr.warning('You must have an Account, Create it now')
  //    }
  //    else{
  //     history.push('/rendezVous')
  //    }
  // }

  // const displayPhoneNumber =()=>{

  // }

  const listMedcines = medecin.map((item) =>


  <div class="blog-slider mt-5">

  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src={logo} alt=""/>
      </div>
      <div class="blog-slider__content">
  <div class="blog-slider__title"><h4>{item.fullName}</h4></div>
  <span class="blog-slider__code">{item.speciality}</span>        
  <div class="blog-slider__code">{item.city}</div>
  <div class="blog-slider__title" style={{color: item.availablity !== "NotAvailable"?'color': 'red'}}>{item.availablity}</div>
  <Link to={`/rendezVous/${item._id}`} class="blog-slider__button" style={{visibility: item.availablity !== "NotAvailable"?'visible':'hidden'}}>Take Appointment</Link>
  <Link class="blog-slider__button"  >teleConsiel</Link>
  </div>
    </div>
    
  </div> 
  
  {/* <div class="blog-slider__pagination"></div> */}

 </div> 
);



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
                {listMedcines}

                </div>
            </div>
        </section>
                    
     
            
        </div>     
  )
}
