import React from "react";
import { Helmet } from 'react-helmet-async'
import pic from "../mypic2.jpg";
import Header from "../components/Header";
import  Footer  from '../components/Footer'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <Header />
      <section className="container">
        <div className="img-handler">
          <img src={pic} alt="pic2" loading="eager" decoding="sync" className="pic2"/>
        </div>
        <p className="about-data">
        Seeking knowledge is an eternal process that stems from humility,
        has pleasure in contemplating the immensity of the attempt.
          <br/><i></i><q>The moment you stop learning is the moment you start dying</q>
          <cite> <b>Albert Einstein.</b></cite>
        </p>
      </section>
      <h2>Skills</h2>
      <section className=" container">
        <div className="skills-container">
          <div className="skill">
            <h5>Html</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"70%"}}></div>
              <div className="skill-percent">70%</div>
            </div>
          </div>
          <div className="skill">
            <h5>Css</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"75%"}}></div>
              <div className="skill-percent">75%</div>
            </div>
          </div>
          <div className="skill">
            <h5>Js</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"70%"}}></div>
              <div className="skill-percent">70%</div>
            </div>
          </div>
          <div className="skill">
            <h5>React</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"85%"}}></div>
              <div className="skill-percent">85%</div>
            </div>
          </div>
        </div>
        <div className="skills-container">
          <div className="skill">
          <div className="skill">
            <h5>NextJs</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"50%"}}></div>
              <div className="skill-percent">50%</div>
            </div>
          <div className="skill">
            <h5>ExpressJs</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"40%"}}></div>
              <div className="skill-percent">40%</div>
            </div>
          </div>
            <h5>NodeJs</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"30%"}}></div>
              <div className="skill-percent">30%</div>
            </div>
          </div>
          <div className="skill">
            <h5>MongoDB</h5>
            <div className="skill-progress">
              <div className="skill-border" style={{width:"30%"}}></div>
              <div className="skill-percent">30%</div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;
