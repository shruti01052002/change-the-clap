import React from "react";
import Card from "./Card";
import domains from "./domains";
import Navbar from "./Navbar";

const Domain = () => {

    return (
        <>
            <Navbar />
            <h1
                style={{ textAlign: 'center', textShadow: '2px 2px 5px rgb(255, 0, 128)', fontSize: '50px', fontFamily: 'Stencil Std, fantasy', color: 'whitesmoke' }}>
                EXPLORE DOMAINS
            </h1>
            <div className="container" align="center" style={{ marginTop: "40px" }}>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        domains.map((val) => {
                            return <Card
                                key={val.id}
                                src={val.src}
                                title={val.title}
                                sub={val.sub}
                                desc={val.desc}
                            />
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default Domain;