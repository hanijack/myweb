import React from "react";
import { Helmet } from 'react-helmet-async'
import pic from "../mypic2.jpg";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <Header />
      <section className="container">
        <img src={pic} alt="pic2" />
      </section>
    </>
  );
};

export default About;
