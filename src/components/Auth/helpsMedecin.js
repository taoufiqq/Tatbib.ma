export const isAuthenticated = () => {
    const token =  localStorage.getItem('token');
    const role =  localStorage.getItem('role');

    if(token && role === "Medcine"){
        return token
    }

    return false
}