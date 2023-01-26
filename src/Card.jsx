import React from "react";

const Card = (props) => {
    return (
        <>
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
        </>
    );
}

export default Card;