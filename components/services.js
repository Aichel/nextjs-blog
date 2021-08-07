import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./cards/service-card";
import BlockTitle from "./block-title";


const SERVICES_DATA = [
  {
    icon: "chacra-icon-smartphone",
    title: "High Creative App \n Display",
    text:
      "There are many variations of passages of lorem ipsum but majority have suffered.",
    link: "#"
  },
  {
    icon: "chacra-icon-smartphone-1",
    title: "Unique and Custom \n Options",
    text:
      "There are many variations of passages of lorem ipsum but majority have suffered.",
    link: "#"
  },
  {
    icon: "chacra-icon-smartphone-2",
    title: "Secure and Perfect \n Integration",
    text:
      "There are many variations of passages of lorem ipsum but majority have suffered.",
    link: "#"
  }
];
const Services = () => {
  return (
    <section className="services-style-one" id="service">
      <Container>
        <BlockTitle
          textAlign="center"
          title={`Effective tools for \n busy administrators.`}
        />
        <Row>
          {SERVICES_DATA.map(({ icon, title, text, link }, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <ServiceCard icon={icon} title={title} text={text} link={link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
