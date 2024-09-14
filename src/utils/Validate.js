
export const validation = (email,password)=>
    {
    
    const verifyEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);

    const verifyPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); 

    if(!verifyEmail) return "Email is not vaild";

    if(!verifyPassword) return "Password is not valid";

    return null;

}