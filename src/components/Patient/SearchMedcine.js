import React,{useEffect,useState} from 'react'
import { Link,usenavigate  } from 'react-router-dom';
import logo from '../images/logo.png'
import Search from '../images/Search.svg'
import axios from 'axios';

export default function SearchMedcine() {
    const navigate  = usenavigate ();
    // const token =localStorage.getItem("tokenPatient");
    // const [city, setCity] = useState("");
    const [speciality, setSpeciality] = useState("");
    // const [fullName, setFullName] = useState("");

    const [medcine, setMedcine] = useState();

    useEffect(()=>{
  
      axios.get(`https://tatbib-api.onrender.com/medcine/getAllMedcine`)
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

    axios.get(`https://tatbib-api.onrender.com/medcine/searchMedcine/${speciality}`)
          
        .then(res => {
            if(res.error){
                return false
            } else{
            localStorage.setItem('medcine', JSON.stringify(res.data));
            navigate ('/resultSearchMedcine')
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
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-6 px-5 py-4" style={{background: "white", borderRadius: '7px'}}>
                        <h2 className="h2">Trouvez votre médecin et prenez rendez-vous en consultation cabinet</h2>
                     
                        <form onSubmit={handleSubmit} className="py-5">
                        
                            <div className="col-12">
                           
                            <div className="input-icons mb-4">
                           
                                    <select className="select p-3">
                                    <option selected value="Choisir Un Medcine">Choisir le nom de Medcine</option>
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
                                     onChange={(e) => setSpeciality(e.target.value)}
                                    >
                                        <option selected value="Choisir Une Spécialité">Choisir Une Spécialité</option>
                                        { medcine && medcine.map(item =>(
                                                <option key={item.id} value={item.speciality}>
                                                { item.speciality }
                                              </option>
                                               ))}
                                      
                                    </select>
                                   
                                </div>
                                <div className="input-icons mb-4">
                             
                                    <select className="select p-3">
                                        <option selected value="Choisir Une Ville">Choisir Une Ville</option>
                                        { medcine && medcine.map(item =>(
                                                <option key={item.id} value={item.city}>
                                                { item.city }
                                              </option>
                                               ))}
                                   
                                    </select>
                                
                                </div>
                         
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="button1 py-3">Rechercher</button>
                            </div>
                        </form>
                        
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <img alt="" id="health" className="health-img" src={Search} className="rounded" />
                    </div>
                </div>
            </div>
        </section>
                    
     
            
        </div>     
  )
}
