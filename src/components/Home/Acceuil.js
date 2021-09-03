import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import health from '../images/Health.svg'
import icon1 from '../images/map-doctor.png'
import icon2 from '../images/bell.png'
import icon3 from '../images/phone-alt.png'
import icon4 from '../images/clipboard-list.png'
import Medicine from '../images/Medicine.svg'
import wiqaytna from '../images/wiqaytna.png'
import logo_footer from '../images/logo_footer.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import facebook from '../images/facebook.png'

// get our fontawesome imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './StyleHome.css'

export default function Acceuil() {
    return (

    <div className="container-fluid px-0" style={{overflow: 'auto'}}>
        <section className="header-page">
            <div className="container">
                <div class="row justify-content-between py-3 align-items-center">
                    <div class="col-12 col-sm-3 col-lg-4 d-flex justify-content-center justify-content-lg-start py-2 py-lg-0">
                        <img src={logo} width="100px"/>
                    </div>
                    <div class="col-12 col-sm-9 col-lg-6 col-xl-4">
                        <div class="row justify-content-center">
                            <div class="col-6 col-md-4 col-lg-5 col-xl-6 d-flex justify-content-end">
                                <Link class="btn_Espace_Professionnels" to="/espacePatient">
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

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6 px-5 py-4" style={{background: "white", borderRadius: '7px'}}>
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
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <img className="health-img" src={health} className="rounded" />
                    </div>
                </div>
            </div>
        </section>
                    
        <div className="container-fluid py-5" style={{background: '#2CA5B8'}}>   
            <h3 className="fw-bold fs-2  text-center" style={{color: 'white'}}>Pourquoi choisir le logiciel TATBIB Connect ?</h3>
            <div className="row justify-content-center py-3">
                <div className="col-12 col-md-2 text-center">
                    <img src={icon1}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>Agenda intelligent et ergonomique</p>
                </div>
                <div className="col-12 col-md-2 text-center">
                    <img src={icon2}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>Dossier médical digitalisé</p>
                </div>
                <div className="col-12 col-md-2 text-center">
                    <img src={icon3}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>TeleConsiel</p>
                </div>
                <div className="col-12 col-md-2 text-center">
                    <img src={icon4}/>
                    <p className="py-2 mb-0 fw-bold fs-5 text-center" style={{color:"white"}}>Accès et données hautement sécurisés</p>
                </div>
            </div>
        </div>
        
        <div className="container py-5">
            <h4 className="fs-2 fw-bold text-center py-3" style={{color: '#2CA5B8'}}>Nos Praticiens</h4>
            
            <div className="row justify-content-evenly">
                <div className="col-12 col-sm-6 col-md-3 text-center m-2" style={{ backgroundColor: '#E5E5E5', borderRadius: '20px' }}>                 
                    <img src={Medicine}/>
                    <span>Nom Médecin</span>
                    <h4>Médecin</h4>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center m-2" style={{ backgroundColor: '#E5E5E5', borderRadius: '20px' }}>
                    <img src={Medicine}/>
                    <span>Nom Médecin</span>
                    <h4>Médecin</h4>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center m-2" style={{ backgroundColor: '#E5E5E5', borderRadius: '20px' }}>
                    <img src={Medicine}/>
                    <span>Nom Médecin</span>
                    <h4>Médecin</h4>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-6">
                    <h1 className="py-2">Ensemble, protégeons-nous pour limiter la propagation du Coronavirus « COVID-19 »</h1>
                    <p className="fs-4">Téléchargez Wiqaytna et contribuez à contrer la propagation du virus.</p>
                    <button type="submit" className="btn btn-primary py-3 px-4 fs-5" style={{background: '#1AA9E9', border: 'none'}}>Plus D'information</button>
                </div>
                <div className="col-12 col-md-6 col-lg-6 ">
                    <img  src={wiqaytna} alt="" width="100%"/>
                </div>
            </div> 
        </div>
     
        <div style={{background: 'rgb(242, 255, 246)'}}>
            <div className="container py-5" >
                <div className="row align-items-start">
                    <div className="col-12 col-sm-6 col-md-4 my-3 my-sm-0">
                        <Link className="d-flex justify-content-center justify-content-md-start">
                            <img src={logo_footer} width="70px" alt=""/>
                        </Link>
                        <p className="mb-0 fs-5 text-center text-sm-start">1er site télé conseil médical au maroc : Médecin généraliste, spécialiste et médecins dentistes en ligne..</p>
                        <span className="fs-6 text-center text-sm-start">Email: contact@TATBIB.ma</span>
                        <div className="row py-2 justify-content-center justify-content-md-start">
                            <Link className="col-2 px-0 text-center"> <img src={facebook} className="iconfooter" alt=""/></Link>
                            <Link className="col-2 px-0 text-center"> <img src={linkedin} className="iconfooter" alt=""/></Link>
                            <Link className="col-2 px-0 text-center"> <img src={twitter} className="iconfooter" alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-3 my-sm-0">
                        <h3>Les spécialités</h3>
                        <div>
                            <div >
                                <ul className="list-group">
                                  <li><Link className="list-item">Cardiologue</Link></li>
                                  <li><Link className="list-item">Dermatologue</Link></li>
                                  <li><Link className="list-item">Gastro-entérologie</Link></li>
                                  <li><Link className="list-item">Médecin dentiste</Link></li>
                                  <li><Link className="list-item">Médecin généraliste</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 my-3 my-sm-0">
                        <h3>Les recherches populaires</h3>
                        <div>
                            <div >
                              <ul className="list-group">
                                  <li><Link className="list-item">médecin généraliste à casablanca</Link></li>
                                  <li><Link className="list-item">Médecin dentiste à casablanca</Link></li>
                                  <li><Link className="list-item">Médecin dentiste à rabat</Link></li>
                                  <li><Link className="list-item">Médecin dentiste à agadir</Link></li>
                                  <li><Link className="list-item">Médecin dentiste à Marrakech</Link></li>
                              </ul>
                          </div>
                        </div>
                    </div>
                </div>
                <div className=" py-3 text-center d-flex flex-column">
                    <span className=""> © 2021 TATBIB.ma . Tous les droits réservés</span>
                    <Link className=""> Conditions générales d'utilisation</Link>
                </div>
            </div>
            
        </div> 
    </div>
    
  )
}
