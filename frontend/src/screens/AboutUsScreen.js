import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";

const AboutUsScreen = (props) => {
    return (
        <div>
            <Container>
                <Helmet>
                    <title>About Us</title>
                </Helmet>
                <h1 className="my-3">About Us</h1>
                    
                <Row>
                    <Col md={6}>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, distinctio cum facilis ad aut odio animi! Unde illo cum at impedit error consequuntur nihil dolorum, provident, aliquam quaerat illum laborum magni accusantium quibusdam deleniti repudiandae perspiciatis aut iusto similique non. Deserunt deleniti blanditiis pariatur iusto eum aperiam est sed ex unde quidem repellat at saepe voluptates, nemo, iure fugit earum voluptatum eaque. Quaerat impedit tenetur cumque mollitia, odio tempora vel eaque excepturi dignissimos esse optio explicabo magni sapiente assumenda id perferendis necessitatibus, facilis illum ab beatae? Dolore explicabo magnam id pariatur distinctio enim veniam nisi, libero, quia quod, praesentium ipsam!
                        </p>
                        <NavLink to="/contactus" className="btn btn-outline-primary px-3">
                            Contact Us
                        </NavLink>
                    </Col>
                    <Col md={2}>
                        <img
                            src="/images/t.jpeg"
                            alt="About us"
                            width="550px"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUsScreen

// import React from "react";
// import { NavLink } from "react-router-dom";
// const About = () => {
//     return (
//         <div>
//             <div className="container py-5 my-5">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <h1 className="text-primary fw-bold mb-4">About Us</h1>
//                         <p className="lead">
//                             Becoming India’s no. 1 fashion destination is not an easy feat.
//                             Sincere efforts, digital enhancements and a team of dedicated
//                             personnel with an equally loyal customer base have made ShopMart the
//                             online platform that it is today. The original B2B venture for
//                             personalized gifts was conceived in 2007 but transitioned into a
//                             full-fledged ecommerce giant within a span of just a few years. By
//                             2012, ShopMart had introduced 350 Indian and international brands to
//                             its platform, and this has only grown in number each passing year.
//                             Today ShopMart sits on top of the online fashion game with an
//                             astounding social media following, a loyalty program dedicated to
//                             its customers, and tempting, hard-to-say-no-to deals. The ShopMart
//                             shopping app came into existence in the year 2015 to further
//                             encourage customers’ shopping sprees. Download the app on your
//                             Android or IOS device this very minute to experience fashion like
//                             never before.
//                         </p>
//                         <NavLink to="/contactus" className="btn btn-outline-primary px-3">
//                             Contact Us
//                         </NavLink>
//                     </div>
//                     <div className="col-md-6 d-flex justify-content-center">
//                         <img
//                             src="/images/t.jpeg"
//                             alt="About us"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;


