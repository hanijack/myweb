import React from 'react';
import photo from "../mypic.png";
import Header from "../components/Header"

const Home = () => {
  return (
    <>
        <Header/>
        <main>
            <section className='container main-container'>
                <img src={photo} alt='personal' />
                <h3>Hello , I am</h3>
                <h1>Mohamad Darklt</h1>
                <p>a web developer with biomedical background</p>
        </section>
        </main>
    </>
  )
}

export default Home