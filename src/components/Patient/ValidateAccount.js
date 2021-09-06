import axios from "axios";
import React,  { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const ValidateAccount = () => {

    const history = useHistory();

    const {token} = useParams();
    console.log(token);

    useEffect(()=>{

        axios.put(`http://localhost:3030/patient/activateCompte/${token}`)
		.then(res => {

          history.push('/loginPatient');
          toastr.info('Your Account Activated successfully!')

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
 
export default ValidateAccount;