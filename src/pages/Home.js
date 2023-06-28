import React from 'react';
import photo from "../mypic.png";
import Header from "../components/Header";
import { Helmet } from 'react-helmet-async';
import  Footer  from '../components/Footer'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
        <Header/>
        <main>
            <section className='container main-container'>
              <div className='img-handler'>
                <img src={photo} alt='personal' decoding="async" className='img-1'/>
              </div>
              
              <div className='intro-data'>
                <h3>Hello , I am here </h3>
                <h1>Mohamad Darklt</h1>
                <p>A web developer with Biomedical engineering background</p>
              </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default Home