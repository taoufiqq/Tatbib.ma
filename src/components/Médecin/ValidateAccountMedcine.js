import axios from "axios";
import React,  { useEffect } from "react";
import { useParams, useNavigate   } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const ValidateAccountMedcine = () => {

    const navigate  = useNavigate  ();

    const {token} = useParams();
    console.log(token);

    useEffect(()=>{

        axios.put(`https://tatbib-api.onrender.com/medcine/activateCompte/${token}`)
		.then(res => {

          navigate('loginMedcine');
          toastr.success('Your Account Activated successfully!')

        }).catch(function (err) {
          console.log(err);
      });

      },[navigate ,token])

    return ( 
        <div>
            <h1>{token}</h1>
        </div>
     );
}
 
export default ValidateAccountMedcine;