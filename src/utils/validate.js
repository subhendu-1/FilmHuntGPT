export const checkValiDate = (name,email,password) => {
    const isNameValid = /^[a-zA-Z ]{2,40}$/.test(name)
    const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValid) return "Wrong Email I'D";
    if(!isPasswordValid) return "Please Enter valid Password";
    if(!isNameValid) return "Enter Valid Name";

    return null;
};