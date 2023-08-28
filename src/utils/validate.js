
export const checkValidData=(email,password)=>{

        const isEmailValid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
        const isPasswordValid=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
        if(!isEmailValid) return"Email ID Not Valid" ;
        if(!isPasswordValid) return"Password Not Valid" ;
        return null;

    };