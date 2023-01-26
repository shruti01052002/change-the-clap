import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

const Login = () => {
    const [errmsg, setErrmsg] = useState();
    const navigate = useNavigate();
    const firebaseConfig = {
        apiKey: "AIzaSyCeE_J-MXUqhE_pgGVBdD14RB6HIDNgAQU",
        authDomain: "change-the-clap.firebaseapp.com",
        projectId: "change-the-clap",
        storageBucket: "change-the-clap.appspot.com",
        messagingSenderId: "90031541766",
        appId: "1:90031541766:web:9932887d038d07f8bd7d87",
        measurementId: "G-F9Z7DF0TCG"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase();
    const auth = getAuth();
    const login = () => {
        var email = document.getElementById("exampleInputEmail1").value;
        var password = document.getElementById("exampleInputPassword1").value;
        // console.log(email + " " + password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Logged in");
                navigate('/success');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrmsg(errorCode.substr(5,));
                console.log(errorMessage)
            });
    }
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h3 style={{color:"white"}}>Please Login Here:</h3>
                <hr/>

                    <form action="" method="post">
                        <div className="form-group">
                            <label style={{color:"white"}} htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                            <label style={{color:"white"}} htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label style={{color:"white"}} className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button type="button" onClick={login} className="btn btn-primary" style={{ color: 'white', backgroundColor: '#FF63B1' }}>Log In</button>
                        <Link to='/signup'><button style={{ color: 'white', backgroundColor: '#FF63B1', marginLeft:"40px" }} type="button" className="btn btn-primary"> Don't Have an Account?</button></Link>
                    <br/>
                    <br/>
                    <h5 style={{color: '#FF63B1'}}>{errmsg}</h5>
                    </form>
            </div>
        </>
    );
}
export default Login;