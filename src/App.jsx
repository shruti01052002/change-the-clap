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
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/success" element={<Sucess/>}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/domain" element={<Domain />}/>
            <Route path="/helping-hand" element={<HelpingHand />}/>
        </Routes>
        </>
    )
}
export default App;