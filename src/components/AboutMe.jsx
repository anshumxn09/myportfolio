import React from 'react'
import './about.css'

const AboutMe = () => {
  return (
    <div className='about-container' id='about'>
        <div className="details">
            <h2>Hello World, Myself</h2>
            <h1>Anshuman Sharma</h1>
            <p>Passionate to learn new technologies coming up in the DIGITAL WORLD, <br />  Sharpening my SKILLS to gain more and more logic to work with Industry.</p>
        </div>
        <div className="myImage">
            <div className="imgContainer">
                <img src="https://res.cloudinary.com/anshumxn09/image/upload/v1665935529/test/blackradius_byt9ja.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutMe