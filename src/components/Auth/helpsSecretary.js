export const isAuthenticated = () => {
    const tokenSecretary =  localStorage.getItem('tokenSecretary');
    const roleSecretary =  localStorage.getItem('roleSecretary');

    if(tokenSecretary && roleSecretary === "Secretary"){
        return tokenSecretary
    }

    return false
}