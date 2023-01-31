import React from "react";
import { Routes, Route } from 'react-router';
import LandingPage from "./LandingPage";
import Sucess from "./SuccesComp/Success";
import SignUp from "./Signup/SignUp";
import Login from "./UserLogin/Login";
import Domain from "./Domain";
import HelpingHand from "./HelpingHand";

const App = () =>{
    return (
        <>
        <Routes>
            <Route path="change-the-clap/" element={<LandingPage/>}/>
            <Route path="change-the-clap/success" element={<Sucess/>}/>
            <Route path="change-the-clap/signup" element={<SignUp />}/>
            <Route path="change-the-clap/login" element={<Login />}/>
            <Route path="change-the-clap/domain" element={<Domain />}/>
            <Route path="change-the-clap/helping-hand" element={<HelpingHand />}/>
        </Routes>
        </>
    )
}
export default App;