import React from "react";
import Navbar from "./Navbar";
import OrgCard from './OrgCard';
import organisation from "./organisation";

const HelpingHand = () => {

    return (
        <>
            <Navbar />
            <h1
                style={{ textAlign: 'center', textShadow: '2px 2px 5px rgb(255, 0, 128)', fontSize: '50px', fontFamily: 'Stencil Std, fantasy', color: 'whitesmoke' }}>
                Helping Hand
            </h1>
            {
                organisation.map((val) => {
                    return (<OrgCard
                        key={val.key}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />);
                })
            }
        </>
    )
}
export default HelpingHand;