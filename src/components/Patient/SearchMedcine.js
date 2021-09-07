import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import Search from '../images/Search.svg'


export default function SearchMedcine() {
    return (

    <div className="container-fluid px-0" style={{overflow: 'auto'}}>
        <section className="header-page">
            <div className="container">
                <div class="row justify-content-between py-3 align-items-center">
                    <div class="col-12 col-sm-3 col-lg-4 d-flex justify-content-center justify-content-lg-start py-2 py-lg-0">
                        <img src={logo} width="100px"/>
                    </div>
                    {/* <div class="col-12 col-sm-9 col-lg-6 col-xl-4">
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
                    </div> */}
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
                        <img id="health" className="health-img" src={Search} className="rounded" />
                    </div>
                </div>
            </div>
        </section>
                    
     
            
        </div>     
  )
}
