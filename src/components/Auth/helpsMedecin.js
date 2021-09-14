export const isAuthenticated = () => {
    const token =  localStorage.getItem('token');
    const role =  localStorage.getItem('role');
    const Medcine= JSON.parse(localStorage.getItem('medcine'));

    if(token && role === "Medcine" && Medcine._id){
        return token
    }

    return false
}