import React from 'react';
import photo from "../mypic.png";
import Header from "../components/Header";
import { Helmet } from 'react-helmet-async'

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
                <img src={photo} alt='personal' />
              </div>
              
              <div className='intro-data'>
                <h3>Hello , I am</h3>
                <h1>Mohamad Darklt</h1>
                <p>a web developer with biomedical background</p>
              </div>
              
        </section>
        </main>
    </>
  )
}

export default Home