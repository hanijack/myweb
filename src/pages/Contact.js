import React from 'react';
import { Context } from '../components/Context'

const Contact = () => {
    const {theme}=React.useContext(Context)
  return (
    <div className={`contact-container ${theme}`}>Contact</div>
  )
}

export default Contact