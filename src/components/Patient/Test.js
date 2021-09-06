import axios from "axios";
import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const Test = () => {

    let { token } = useParams();



    return ( 
        <div>
            <h1>{token}</h1>
        </div>
     );
}
 
export default Test;