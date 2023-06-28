import React from "react";
import { Helmet } from 'react-helmet-async'
import Header from "../components/Header";
import { Context } from '../components/Context';
import  Footer  from '../components/Footer'

const Services = () => {
  const {theme}=React.useContext(Context)
  return (
    <>
      <Helmet>
        <title>Services page</title>
      </Helmet>
      <Header />
      <div className={`container container-services ${theme}`}>
        <div className="drops" style={{ color: "#ff0f5b" }}>
          <div className="content">
            <h2><span>Web</span></h2>
            <p>Developing and maintaining the user interface</p>
          </div>
          {
            
//   Creating tools that improve site interaction regardless of the browse
          }
        </div>
        <div className="drops" style={{ color: "#be01fe" }}>
          <div className="content">
            <h2><span>UI</span></h2>
            <p> Implementing design on mobile websites.</p>
          </div>
        </div>
        <div className="drops" style={{ color: "#01b4ff" }}>
          <div className="content">
            <h2><span>Efficacy</span></h2>
            <p>Creating tools that improve site interaction regardless of the browser</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Services;
