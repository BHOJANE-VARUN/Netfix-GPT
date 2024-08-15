const checkvalid = (email, pass) => {
    // Correct email validation regex
    let e = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    
    // Correct password validation regex
    let p = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pass);
    
    return { isEmailValid: e, isPasswordValid: p };
}
  
export default checkvalid;