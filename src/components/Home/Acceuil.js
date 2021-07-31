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

     <div className="container-fluid">
           <div className="header">
                  <img src={logo} className="logo" alt=""/>
              <div className="buttons">
                  <Link to="/espaceMédecin" className="btn_Espace_Professionnels"><i class="fas fa-user-md"></i> Espace Professionnels</Link>
                  <Link to="/espacePatient" className="btn_Espace_Patients"><i class="fas fa-user-injured"></i> Espace Patients</Link>
              </div>
           </div>
           <h2 className="h2">Trouvez votre médecin et prenez rendez-vous en consultation cabinet</h2>

           <div className="row">
 
             <div className="col-12 col-md-6 col-lg-6">


      <form action="/search/vols" method="POST" className="py-5">
        <div className="col-lg-8  mx-auto">
          <div className="input-icons mb-4"><i className="far fa-calendar-alt icon" />
          <input className="inpt" type="text" name="name" placeholder="Médecin ..." />
          </div>
          <div className="input-icons mb-4">
          <select className="select">
        <option selected value="Choisir Une Spécialité">Choisir Une Spécialité</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
     </select>
          </div>
          <div className="input-icons mb-4">
          <select className="select">
        <option selected value="Choisir Une Ville">Choisir Une Ville</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
     </select>
          </div>
        </div>
        <button type="submit" className="button1">Rechercher</button>
      </form>

  </div>
             <div className="col-12 col-md-6 col-lg-6 health">
               <img className="health-img" src={health} className="rounded" />
              </div>
            </div>
                    
           <div className="section1">
            
         <h3>Pourquoi choisir le logiciel TATBIB Connect?</h3>
         <div className="icon">
           <div>
               <img src={icon1}/>
               <div>Agenda intelligent et ergonomique</div>
           </div>
           <div>
               <img src={icon2}/>
               <div>Dossier médical digitalisé</div>
           </div>
           <div>
               <img src={icon3}/>
               <div>TeleConsiel</div>
           </div>
           <div>
               <img src={icon4}/>
               <div>Accès et données hautement sécurisés</div>
           </div>
        </div>
        </div>
            <h4>Nos Praticiens</h4>
           <div className="section2">
              
                 <div className="Praticiens">                 
                     <img src={Medicine}/>
                     <span>Nom Médecin</span>
                     <h4>Médecin</h4>
                   </div>
                   <div className="Praticiens">
                     <img src={Medicine}/>
                     <span>Nom Médecin</span>
                     <h4>Médecin</h4>
                   </div>
                   <div className="Praticiens">
                     <img src={Medicine}/>
                     <span>Nom Médecin</span>
                     <h4>Médecin</h4>
                   </div>
                 </div>
         
           <div className="row wiqaytna">
 
      <div className="col-12 col-md-6 col-lg-6">
       <h1>Ensemble, protégeons-nous pour limiter la propagation du Coronavirus « COVID-19 »</h1>
       <p>Téléchargez Wiqaytna et contribuez à contrer la propagation du virus.</p>
       <button type="submit" className="button2">Plus D'information</button>
      </div>
      <div className="col-12 col-md-6 col-lg-6 health">
        <img className="health-img" src={wiqaytna} className="rounded" />
      </div>
     </div>   
     
           <div>
           <div className="section" style={{marginTop:'5%'}}>
    <div className="infooter">
      <div className="d1">
        <Link><img src={logo_footer} className="img" /></Link>
        <p className="h">1er site télé conseil médical au maroc : Médecin généraliste, spécialiste et médecins dentistes en ligne..</p>
        <span>Email: contact@TATBIB.ma</span>
        <div className="icons">
         <Link> <img src={facebook} className="iconfooter" /></Link>
         <Link> <img src={linkedin} className="iconfooter" /></Link>
         <Link> <img src={twitter} className="iconfooter" /></Link>
        </div>
      </div>
      <div className="d2">
        <h3>Les spécialités</h3>
        <div className="QL">
          <div className="ul1">
            <ul>
              <li><Link>Cardiologue</Link></li>
              <li><Link>Dermatologue</Link></li>
              <li><Link>Gastro-entérologie</Link></li>
              <li><Link>Médecin dentiste</Link></li>
              <li><Link>Médecin généraliste</Link></li>
            </ul>
          </div>
        
        </div>
      </div>
      <div className="d3">
      <h3>Les recherches populaires</h3>
        <div className="QL">
          <div className="ul1">
            <ul>
              <li><Link>médecin généraliste à casablanca</Link></li>
              <li><Link>Médecin dentiste à casablanca</Link></li>
              <li><Link>Médecin dentiste à rabat</Link></li>
              <li><Link>Médecin dentiste à agadir</Link></li>
              <li><Link>Médecin dentiste à Marrakech</Link></li>
            </ul>
          </div>
        
        </div></div>
    </div>
  </div>
           <footer className="footer">
    <span className="S1"> © 2021 TATBIB.ma . Tous les droits réservés</span>
    <Link className="CG"> Conditions générales d'utilisation</Link>
  </footer>


  
</div>

   
    </div>
    
   )
}
