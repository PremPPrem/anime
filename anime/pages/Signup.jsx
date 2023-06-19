import styles from "@/styles/SignIn.module.scss";
import { useState } from "react";

export default function SignUp() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
  
    //error message//
    const [errorUserName,setErrorUserName] = useState("")
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRepassword, setErrorRepassword] = useState("");
  
    //color check//
    const [color, setColor] = useState("");
    // const [emailColor, setEmailColor] = useState("");
    // const [passwordColor, setPasswordColor] = useState("");
    // const [repasswordColor, setRepasswordColor] = useState("");
    // const border =  [border-bottom: "green"]
   
   
    const validateForm = (e)=> {
        e.preventDefault()
    
        if(userName.length>=8){
          setErrorUserName('')
        } else {
          setErrorUserName('Username must be at least 8 characters')
          setColor("red")
        }
    
        if(email.includes("@")){
          setErrorEmail("")
        } else {
          setErrorEmail("Email  is invalid")
          setColor("red")
        }
    
        if(password.length>=8){
          setErrorPassword("")
        
        } else {
          setErrorPassword("Password must be at least 8 characters")
          setColor("red")
        }
    
        if(repassword !== " " && repassword === password && repassword.length>=8) {
          setErrorRepassword("")
          
        } else {
          setErrorRepassword("Passwords not match")
          setColor("red")
        }
      }
   
    return(
        <>
         <div className={styles.body}>
          <div className={`${styles.login} ${styles.signup} `} >
          <h1>Register</h1>
          <form onSubmit={validateForm}>
            <div className={styles.loginFrom}>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
               
                
              />

              <span></span>
              <label>Username</label>
              <small style={{color:color}}> {errorUserName} </small>
            </div>

            <div className={styles.loginFrom}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // style={{borderColor:emailColor}}
               
              />

              <span></span>
              <label>Email</label>
              <small style={{color:color}}> {errorEmail} </small>
            </div>
            <div className={styles.loginFrom}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               
              />

              <span></span>
              <label>Password</label>
              <small style={{color:color}}> {errorPassword} </small>
              
            </div>
            <div className={styles.loginFrom}>
              <input
                type="password"
                value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
               
              />

              <span></span>
              <label>Confirm Password</label>
              <small style={{color:color}}> {errorRepassword} </small>
            </div>
            
            <button className={styles.submit}>Register</button>
           
          </form>
        </div>
      </div>
        </>
    )
}