import axios from 'axios'

export const emailValidator=(email, setErrors)=>{
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            setErrors({email:true})

        return "Incorrect email format";
      }
    else{
        
        axios.get(`http://localhost:8080/users/check/{email}`).then(res=>{
            if(res.status===409){
                setErrors({email:true})

                return "Email already exists";
            }
            else {
                setErrors({email:false})
                return ""};

        })
    }
    setErrors({email:false})
    return "";

}
export const passwordValidator=(password, setErrors)=>{
    if (password==="") {
        setErrors({email:true})

        return "Password is required";
      } else if (password.length < 8) {
        setErrors({email:true})

        return "Password must have a minimum 8 characters";
      }
      setErrors({email:false})

      return "";
}
export const phoneValidator=(phone, setErrors)=>{
    if (phone==="") {
        setErrors({email:true})

        return "Phone number is required";
      } 
      setErrors({email:false})

      return "";
}

export const usernameValidator=(username, setErrors)=>{
    if (username==="") {
        setErrors({email:true})

        return "user name  is required";
      } else if (username.length<3) {
        setErrors({email:true})

        return "user name  must have a minimum 3 characters";
      } 

      setErrors({email:false})

      return "";
}