import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
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
    // console.log(analytics);
    const auth = getAuth();
    const register = () =>{
        const email = document.getElementById("inputEmail4").value;
        const password = document.getElementById("inputPassword4").value;
        const confirm = document.getElementById("confirm_password").value;
        if(password===confirm) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                navigate('/change-the-clap/login');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                setErrmsg(errorCode.substr(5,));
                console.log(errmsg);
                // navigate('/signup');
                // ..
            });
        } else {
            console.log("Password not matching");
            setErrmsg("Password not matching");
            navigate('/signup');
        }
    }

    return (
        <>
            <Navbar />
            <div className="container mt-4" style={{ paddingTop: '60px' }}>
                <h3 style={{ color: 'white' }}>Please Sign Up Here:</h3>
                <hr />
                <form action="" method="post">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label style={{ color: 'white' }} htmlFor="inputEmail4">Email</label>
                            <input type="text" className="form-control" name="username" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label style={{ color: 'white' }} htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" name="password" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={{ color: 'white' }} htmlFor="inputPassword4">Confirm Password</label>
                        <input type="password" className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />
                    </div>

                    <button onClick={register} style={{ color: 'white', backgroundColor: '#FF63B1' }} type="button" className="btn btn-primary">Sign Up</button>
                    <Link to='/change-the-clap/login'><button style={{ color: 'white', backgroundColor: '#FF63B1', marginLeft:"40px" }} type="button" className="btn btn-primary"> Already Have an Account?</button></Link>
                    <br/>
                    <br/>
                    <h5 style={{color: '#FF63B1'}}>{errmsg}</h5>
                </form>
            </div>
        </>
    );
}

export default SignUp;
