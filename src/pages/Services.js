import React from 'react';
import Header from "../components/Header"

const Services = () => {
  return (
    <>
        <Header/>
        <div className='container container-services'>
            <div className='drops' style={{color:"#ff0f5b"}}>
                <div className='content'>
                    <h2>hello</h2>
                    <p>my service is very cool here where I type it ,contact me</p>
                </div>
            </div>
            <div className='drops' style={{color:"#be01fe"}}>
                <div className='content'>
                    <h2>hello</h2>
                    <p>my service is very cool here where I type it ,contact me</p>
                </div>
            </div>
            <div className='drops' style={{color:"#01b4ff"}}>
                <div className='content'>
                    <h2>hello</h2>
                    <p>my service is very cool here where I type it ,contact me</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services