import React,{useEffect,useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import health from '../images/Health.svg'
import icon1 from '../images/map-doctor.png'
import icon2 from '../images/bell.png'
import icon3 from '../images/phone-alt.png'
import icon4 from '../images/clipboard-list.png'
import Medicine from '../images/Medicine.svg'
import wiqaytna from '../images/wiqaytna.png'

import './StyleHome.css'

export default function Acceuil() {

    const history = useHistory();

    // const token =localStorage.getItem("tokenPatient");
    // const [city, setCity] = useState("");
    const [speciality, setSpeciality] = useState("");
    // const [fullName, setFullName] = useState("");

    const [medcine, setMedcine] = useState();

    useEffect(()=>{
  
      axios.get(`http://localhost:3030/medcine/getAllMedcine`)
        .then(function (response) {
            
          setMedcine(response.data)
          setSpeciality(response.data.speciality)
        //   console.log(response.data);
        }).catch(function (err) {
          console.log(err);
      });
      
      },[])


      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(speciality);

    axios.get(`http://localhost:3030/medcine/searchMedcine/${speciality}`)
          
        .then(res => {
            if(res.error){
                return false
            } else{
            localStorage.setItem('medcine', JSON.stringify(res.data));
            history.push('/resultSearchMedcine')
        }
        })
    }

    return (

    <div className="container-fluid px-0" style={{overflow: 'auto'}}>
        <section className="header-page">
            <div className="container">
                <div class="row justify-content-between py-3 align-items-center">
                    <div class="col-12 col-sm-3 col-lg-4 d-flex justify-content-center justify-content-lg-start py-2 py-lg-0">
                        <img alt="" src={logo} width="100px"/>
                    </div>
                    <div class="col-12 col-sm-9 col-lg-6 col-xl-4">
                        <div class="row justify-content-center">
                            <div class="col-6 col-md-4 col-lg-5 col-xl-6 d-flex justify-content-end">
                                <Link class="btn_Espace_Professionnels" to="/espaceMédecin">
                                    <i class="fas fa-user-injured"></i> Espace Professionnels
                                </Link>
                            </div>
                            <div class="col-6 col-md-4 col-lg-5 d-flex justify-content-center">
                                <Link class="btn_Espace_Patients" to="/espacePatient">
                                    <i class="fas fa-user-injured"></i> Espace Patients
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="social">
        <ul>
            <li><Link to="https://twitter.com/ibrahim_jabbari">Twitter <i class="fa fa-twitter twitter"></i></Link></li>
            <li><Link>Instagram <i class="fa fa-instagram"></i></Link></li>
            <li><Link>Google+ <i class="fa fa-google-plus"></i></Link></li>
            <li><Link>Facebook <i class="fa fa-facebook"></i></Link></li>
        </ul>
    </nav>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6 px-5 py-4" style={{background: "white", borderRadius: '7px'}}>
                        <h2 className="h2" style={{textAlign:'center'}}>Find your doctor and make an appointment or teleConsiel</h2>
                        <form className="py-5" onSubmit={handleSubmit}>
                        <div className="col-12">
                           
                           <div className="input-icons mb-4">
                          
                                   <select className="select p-3"
                                            //  value={fullName}
                                            //  onChange={(e) => setFullName(e.target.value)}
                                             >
                                   <option selected value="Choisir Un Medcine">Choose the name of Medcine</option>
                                   { medcine && medcine.map(item =>(
                                           <option key={item.id} value={item.fullName}>
                                          { item.fullName }
                                        </option>
                                         ))}
                                   </select>
                   
                               </div>
                               <div className="input-icons mb-4">
                        
                                   <select className="select p-3"
                                            value={speciality}
                                            onChange={(e) => setSpeciality(e.target.value)}>
                                       <option selected value="Choisir Une Spécialité">Choose A Specialty</option>
                                       { medcine && medcine.map(item =>(
                                               <option key={item.id} value={item.speciality}>
                                               { item.speciality }
                                             </option>
                                              ))}
                                     
                                   </select>
                                  
                               </div>
                               <div className="input-icons mb-4">
                            
                                   <select className="select p-3"   
                                            // value={city}
                                            // onChange={(e) => setCity(e.target.value)}
                                            >
                                       <option selected value="Choisir Une Ville">Choose a city</option>
                                       { medcine && medcine.map(item =>(
                                               <option key={item.id} value={item.city}>
                                               { item.city }
                                             </option>
                                              ))}
                                  
                                   </select>
                               
                               </div>
                        
                           </div>
                            <div class="d-grid">
                                <button type="submit" class="button1 py-3">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <img alt=""  id="health" className="health-img" src={health} />
                    </div>
                </div>
            </div>
        </section>
                    
        <div className="container-fluid py-5" style={{background: '#2CA5B8'}}>   
            <h3 className="fw-bold fs-2  text-center" style={{color: 'white'}}>Why choose TATBIB Connect software ?</h3>
            <div className="row justify-content-center py-3">
                <div className="col-12 col-md-2 text-center">
                    <img alt=""  src={icon1}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>Smart and ergonomic agenda</p>
                </div>
                <div className="col-12 col-md-2 text-center">
                    <img alt=""  src={icon2}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>Digital medical record</p>
                </div>
                <div className="col-12 col-md-2 text-center">
                    <img alt=""  src={icon3}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>TeleConsiel</p>
                </div>
                <div className="col-12 col-md-2 text-center">
                    <img alt=""  src={icon4}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>Highly secure access and data</p>
                </div>
            </div>
        </div>
        
        <div className="container py-5">
            <h4 className="fs-2 fw-bold text-center py-3" style={{color: '#2CA5B8'}}>Our practitioners</h4>
            
            <div className="row justify-content-evenly">
            { medcine && medcine.map((item) =>(
                <div className="col-12 col-sm-6 col-md-2 text-center m-2" style={{ backgroundColor: '#E5E5E5', borderRadius: '20px' }}>                 
                    <img alt=""  src={Medicine}/>
                    <h4>{item.fullName}</h4>
                    <h5>{item.speciality}</h5>
                   
                </div>
            ))}
            </div>
        </div>
        
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-8">
                    <h1 className="py-2">Together, let's protect ourselves to limit the spread of the Coronavirus « COVID-19 »</h1>
                    <p className="fs-4">Download Wiqaytna and help stop the spread of the virus.</p>
                    <Link to= {{ pathname: "https://www.wiqaytna.ma/" }} target="_blank"   className="btn btn-primary py-3 px-4 fs-5" style={{background: '#1AA9E9', border: 'none', width:'215px',height:'50px',lineHeight:1}}>More information</Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <img  src={wiqaytna} alt="" width="100%"/>
                </div>
            </div> 
        </div>
          <div class="footer">
            <div class="container">     
                <div class="row">                       
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer">
                            <h4>The specialties</h4>
                            <ul>
                                  <li><Link className="list-item">Cardiologist</Link></li>
                                  <li><Link className="list-item">Dermatologist</Link></li>
                                  <li><Link className="list-item">Gastroenterology</Link></li>
                                  <li><Link className="list-item">Dentiste</Link></li>
                                  <li><Link className="list-item">General Medicine</Link></li>
                            </ul>
                        </div>
                    </div> 
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Popular searches</h4>
                            <ul>
                                  <li><Link className="list-item">General doctor in casablanca</Link></li>
                                  <li><Link className="list-item">Dentiste doctor in casablanca</Link></li>
                                  <li><Link className="list-item">Dentiste doctor in rabat</Link></li>
                                  <li><Link className="list-item">Dentiste doctor in agadir</Link></li>
                                  <li><Link className="list-item">Dentiste doctor in Marrakech</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    <input type="text" class="subscribe__input" placeholder="Enter Email Address"/>
                                    <button type="button" class="subscribe__btn"><i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                <li><Link><i class="fa fa-twitter twitter"></i></Link></li>
                                <li><Link><i class="fa fa-instagram"></i></Link></li>
                                <li><Link><i class="fa fa-google-plus"></i></Link></li>
                                <li><Link><i class="fa fa-facebook"></i></Link></li>

                            </ul>
                        </div>                          
                    </div>      
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright"> © 2021 TATBIB.ma . All rights reserved <Link className="">Terms of Service</Link>.</p>
                    </div>             
                </div>             
            </div>
        </div>
    </div>
    
  )
}
