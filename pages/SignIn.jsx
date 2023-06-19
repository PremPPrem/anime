import styles from "@/styles/SignIn.module.scss";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function SignIn() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);


  //   "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: userName,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (userName === "eve.holt@reqres.in" && password === "cityslicka") {
          setSuccessLogin(true);
          setTimeout(() => {
            router.push("/Login");
          }, 500);
        } 
      })
      .catch(() => {
        setErrorLogin(true)
            setTimeout(() => {
            setErrorLogin(false)
        }, 1500);
    
    });
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.box}>
          {errorLogin && (
             <small className={styles.error}>
              <AiOutlineCloseCircle className={styles.show} />
              Username or Password Error
            </small>
          )}
          {successLogin && (
            <small className={styles.success}>
              <AiOutlineCheckCircle className={styles.show} /> Login Success
            </small>
          )}
        </div>
        <div className={styles.login}>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.loginFrom}>
              <input
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />

              <span></span>
              <label>Username</label>
            </div>
            <div className={styles.loginFrom}>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <span></span>
              <label>Password</label>
            </div>
            <div className={styles.forget}>Forget Password?</div>
            <button className={styles.submit}>Log In</button>
            <div className={styles.signUpLink}>
              Not a member? <Link href="/Signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
