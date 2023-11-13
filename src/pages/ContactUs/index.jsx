import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Welcome from "components/Welcome";
import Icons from "components/Icons";
import Feedback from "components/Feedback";
import Cards from "components/Cards";
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    
      <Welcome  />
      <Icons style={{marginTop:"20px"}} />
      <Cards />
      <Feedback />
      <div className="image">
        <img
          src="/images/Ourbrandtv.jpeg"
          style={{ marginTop: "14%", marginLeft: "44%" }}
        />
      </div>
    </>
  );
};

export default ContactForm;
