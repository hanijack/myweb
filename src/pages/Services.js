import React from "react";
import { Helmet } from 'react-helmet-async'
import Header from "../components/Header";
import { Context } from '../components/Context';

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
            <h2>hello</h2>
            <p>my service is very cool here where I type it ,contact me</p>
          </div>
        </div>
        <div className="drops" style={{ color: "#be01fe" }}>
          <div className="content">
            <h2>hello</h2>
            <p>my service is very cool here where I type it ,contact me</p>
          </div>
        </div>
        <div className="drops" style={{ color: "#01b4ff" }}>
          <div className="content">
            <h2>hello</h2>
            <p>my service is very cool here where I type it ,contact me</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Services;
