import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
    <h1 id='social'>Social Links</h1>
        <div className="social">
            <a href="https://github.com/anshumxn09"><ion-icon name="logo-github" className="logo-github" data-aos="zoom-out"></ion-icon></a>
            <a href='mailto:sharmaaanshumaan@gmail.com'><ion-icon name="mail" data-aos="zoom-out"></ion-icon></a>
            <a href="https://www.linkedin.com/in/anshumxn09/"><ion-icon name="logo-linkedin" data-aos="zoom-out"></ion-icon></a>
            <a href="https://twitter.com/Anshuma48590279"><ion-icon name="logo-twitter" data-aos="zoom-out"></ion-icon></a>
        </div>
        <div className="foot_content">
            <h3>Made with ❤ and ReactJS</h3>
            <h4>&copy; 2022 Anshuman Sharma</h4>
        </div>
    </div>
  )
}

export default Footer