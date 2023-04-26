import axios from "axios";
import React,  { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const ValidateAccountMedcine = () => {

    const history = useHistory();

    const {token} = useParams();
    console.log(token);

    useEffect(()=>{

        axios.put(`https://tatbib-api.onrender.com/medcine/activateCompte/${token}`)
		.then(res => {

          history.push('/loginMedcine');
          toastr.success('Your Account Activated successfully!')

        }).catch(function (err) {
          console.log(err);
      });

      },[history,token])

    return ( 
        <div>
            <h1>{token}</h1>
        </div>
     );
}
 
export default ValidateAccountMedcine;