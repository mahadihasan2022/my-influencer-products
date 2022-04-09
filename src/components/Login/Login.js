import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import app from "../../firebase.init";
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);

  const handelEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  
  const handleRegisteredChange = event =>{
    setRegistered(event.target.checked)
  }

  const handelFromSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }
    if (password.length < 8) {
      setError("Your password must be at least 8 characters");
      return;
    }

    setValidated(true);
    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })

      .catch((error) => {
        console.error(error);
      });

      if(registered) {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(error =>{
          console.error(error);
          setError(error.message);
        })
      }
      else{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          verifyEmail();
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
      }

    e.preventDefault();
  };
  const handlePasswordReset = () =>{
    sendPasswordResetEmail(auth, email)
    .then(() =>{
      console.log('email sent')
    })
  }

  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(() =>{
      console.log('Email Verification Sent');
    })
  }

  return (
    <div className="login-section p-16">
      <h1 className="text-center text-3xl font-bold p-8">Login Our Website</h1>
      <form
        noValidate
        validated={validated}
        onSubmit={handelFromSubmit}
        className="text-center"
      >
        <div className="p-4">
          Name :{" "}
          <input
            type="text"
            className="login-email w-80 h-12"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="p-4">
          Email :{" "}
          <input
            onBlur={handelEmailBlur}
            className="login-email w-80 h-12"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="p-4 pr-12">
          Password :{" "}
          <input
            onBlur={handelPasswordBlur}
            className="w-80 h-12 password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="pr-24">
         <p className="pb-4"> <input onChange={handleRegisteredChange} type="checkbox" className="h-4 w-4"/>Already Registered </p>
        </div>
        <p className="text-sm font-bold text-red-600">{error}</p>
<p className="pb-4">
        <button className="submit w-32 h-8" type="submit">{registered ? 'Login':  'Register'}</button>
        </p>
          <p>
          <button onClick={handlePasswordReset} className="f-pass w-32 h-8">Forget Password</button>
          </p>
      </form>
    </div>
  );
};

export default Login;
