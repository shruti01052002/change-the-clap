import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import Popup from './Popup'



const Carousal = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Carousel  autoPlay={true}  interval={"2000"} infiniteLoop >
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1597586281133-b43c49844e4d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Love Who You Are!</h3>
                        <button className="btn btn-info" data-toggle="modal" data-target="#learnModal" onClick={togglePopup}>LEARN MORE</button>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1555894707-95afad344710?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>All humans are born free and equal in dignity and rights.</h2>
                        <button className="btn btn-info" data-toggle="modal" data-target="#learnModal" onClick={togglePopup}>LEARN MORE</button>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1598037271227-30be6e57b382?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600
                " className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>We care for you</h3>
                        <button className="btn btn-info" data-toggle="modal" data-target="#learnModal" onClick={togglePopup}>LEARN MORE</button>
                    </div>
                </div>
            </Carousel>
            {isOpen && <Popup
      content={<>
      <div className="modal-body">
        <h5 className="modal-title">Concern for you</h5>
        <p>For most of us, work is stressful in and of itself. Imagine carrying the added emotional weight of having to deny and suppress one of the most fundamental aspects of who you are—your gender identity—because it doesn’t conform with society’s norms regarding gender expression. And imagine how it would feel if you revealed your authentic self to those you work with and see every day, only to have them reject, ostracize, or ignore you as a result. TRANSGENDERS face this everyday and in almost every field of employment which becomes the grassroot reason of their impeccable loss of CONFIDENCE to work!! Isn’t it a question of social importance to raise their lost confidence and bring them at par like any other deserving individual. Our application does the same work !!</p>
        </div>
        {/* <button>Test button</button> */}
      </>}
      handleClose={togglePopup}
    />}
        </>
    )
}
export default Carousal;