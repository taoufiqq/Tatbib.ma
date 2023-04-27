import axios from "axios";
import React, { useEffect,useState } from "react";
import {usenavigate ,Link } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import doctor from '../images/doctor.png'
import logo from '../images/logo.png'


const Ordonnances = () => {

    const login =localStorage.getItem('LoginMedcine');
    const id =localStorage.getItem('id_medcine')
  const navigate  = usenavigate ();


  const [listOrdonnance, setListOrdonnance] = useState();




  useEffect(()=>{

    axios.get(`https://tatbib-api.onrender.com/medcine/getOrdonnanceByMedcine/${id}`)
    .then(function (response) {
     
      setListOrdonnance(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
  },[id])

  const logOut =()=>{
    localStorage.clear()
       navigate ('/loginMedcine');
       toastr.success(' LogOut SuccessFully')
    }



    return ( 
        <div className="Container">
 
  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
    <img alt="" src={doctor} style={{borderRadius:'50%'}} />
      <h6>Welcome</h6>
      <h5 style={{color:'white'}}>{login}</h5>
    </header>
    <ul>
      <li tabIndex={0} className="icon-profil"><Link to='/dashboardMedcine' style={{textDecoration:"none",color:"white"}}><span>MyAccount</span></Link></li>
      <li tabIndex={0} className="icon-customers"><Link to='/listAppointments' style={{textDecoration:"none",color:"white"}}><span>ListAppointments</span></Link></li>
      <li tabIndex={0} className="icon-users"><Link to='/listOrdonnances' style={{textDecoration:"none",color:"white"}}><span>Ordonnances</span></Link></li>
      <li tabIndex={0} className="icon-Secrétaire"><Link to='/secretaryCompte' style={{textDecoration:"none",color:"white"}}><span>Secretary</span></Link></li>
      <li tabIndex={0} className="icon-settings"><span onClick={logOut}>Log out</span></li>
    </ul>
  </nav>
  <main>
    <div className="helper">
          Ordonnances<span> Ordonnances | List</span>
    </div>
    {/* <p className="listRDV">Appointemnt list</p> */}
    <div className="table-responsive">
  <div className="table-wrapper">
  <div className="table-title">
      <div className="row">
        <div className="col-sm-5">
          <h2>Ordonnances <b>list</b></h2>
        </div>
        {/* <div className="col-sm-7">
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Add New User</span></a>
          <a href="#" className="btn btn-secondary"><i className="material-icons"></i> <span>Export to Excel</span></a>						
        </div> */}
      </div>
    </div>
    { listOrdonnance && listOrdonnance.map(item =>(
    <div class="blog-slider mt-5"  style={{height:'500px'}}>

  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src={logo} alt=""/>
      </div>
      <div class="blog-slider__content">
  <div class="blog-slider__title"><h4><span style={{color:'red'}}>Dr: </span>{item.medcine.fullName}</h4></div>
  <div class="blog-slider__code"><h4>{item.medcine.speciality}</h4></div>
  <span class="blog-slider__code"><span style={{color:'red'}}>Mr/Mme: </span>{item.patient.firstName} {item.patient.lastName}</span>        
  {/* <div class="blog-slider__code"><span style={{color:'red'}}>date: </span> {item.dateTime}</div> */}

  <div class="blog-slider__code" ><span style={{color:'red'}}>medicamment: </span>
         <textarea style={{height:'100px',width:'450px',border:'none'}}>{item.medicamment}</textarea>

  </div>
  </div>
    </div>
    
  </div> 
  
  {/* <div class="blog-slider__pagination"></div> */}

 </div> 
    ))}
  </div>
</div>

  </main>
</div>
     );
}

export default Ordonnances;