export const isAuthenticated = () => {
    const token =  localStorage.getItem('tokenPatient');
    const role =  localStorage.getItem('rolePatient');
    if(token && role === "Patient"){
        return token
    }

    return false
}