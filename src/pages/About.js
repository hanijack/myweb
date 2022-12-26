import React from 'react';
import pic from "../mypic2.jpg";
import Header from "../components/Header"

const About = () => {
  return (
    <>
    <Header/>
        <section className='container'>
            <img src={pic} alt="pic2"/>
        </section>
    </>    
  )
}

export default About