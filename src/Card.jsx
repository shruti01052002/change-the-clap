import React from "react";
import Navbar from "./Navbar";
import domains from "./domains";

const Card = (props) => {
    return (
        <>
            <Navbar />
            <h1
                style={{ textAlign: 'center', textShadow: '2px 2px 5px rgb(255, 0, 128)', fontSize: '50px', fontFamily: 'Stencil Std, fantasy', color: 'whitesmoke' }}>
                EXPLORE DOMAINS
            </h1>
            <div className="container" align="center" style={{ marginTop: "40px" }}>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <a href="tech.php"><img
                                src={props.src}
                                width="300" height="275" className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <h3 className="card-title">{props.title}</h3>
                                <h6 className="card-title">{props.sub}</h6>
                                <p className="card-text">{props.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;