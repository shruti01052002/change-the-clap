import React from "react";
const About = () => {
    return (
        <>
            <br />
            <br />
            <div className="container">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading" style={{color:"white"}}>Why fit in when you are born to stand out</h2>
                        <p className="lead" style={{color:'white'}}>Remember this, whoever you are, however you are, you are equally valid, equally justified, and equally beautiful.”</p>
                    </div>
                    <div className="col-md-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwxD7tQvEgeI-FnQBoAGrP3RqZiPvN1qGZ-A&usqp=CAU" className="img-fluid" width="300" height="250" alt="..."/>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading" style={{color:'white'}}>Transgender rights are human rights</h2>
                        <p className="lead" style={{color:"white"}}>In April 2014, the Supreme Court of India declared transgender to be a 'third gender' in Indian law.The Transgender Persons (Protection of Rights) Act, 2019, was passed by Parliament in November 2019, and came into effect on 11 January 2020. It protects transgender individuals against discrimination in education, employment and healthcare. It recognizes the gender identity of the individual, and there are provisions in the law for a certificate to be issued with their new gender identity.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="data:image/jpeg;base64,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" className="img-fluid" width="320" height="320" alt="..." />
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
            <br />
            <br />

        </>
    );
}
export default About;