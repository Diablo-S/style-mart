import React, { /*useState*/ useRef } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    // 
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r3a3154', 'template_npsqiec', form.current, 'AIwDgCO4HyINNwfbg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };
    
    return (
        <Container className="small-container">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <h1 className="my-3">Contact Us</h1>

            <Form ref={form} onSubmit=/*{handleSubmit}*/{sendEmail}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </Container >

    );
};

export default ContactForm;
