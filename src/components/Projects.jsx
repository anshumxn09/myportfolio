import React from 'react'
import { useState } from 'react';
import './projects.css';

const Projects = () => {
    const [projectList] = useState([
        {
            name : 'Ecommerce Application',
            code : "https://github.com/anshumxn09/ecommerce.git",
            tools : "MERN Stack",
            img : "https://res.cloudinary.com/anshumxn09/image/upload/v1665931749/test/ecommerce_shj8f7.png"
        } ,
        {
            name : 'Horus View',
            code : "https://github.com/anshumxn09/horus_ecommerce.git",
            tools : "React JS",
            img : "https://res.cloudinary.com/anshumxn09/image/upload/v1672236976/test/horus_view_xv4aar.png"
        },
        {
            name : 'Discover Words',
            img : "https://res.cloudinary.com/anshumxn09/image/upload/v1670622326/test/discover_words1.png_mqaysd.png",
            tools : "React JS",
            code : "https://github.com/anshumxn09/Discover_Words.git"
        },
        {
            name: 'TIC TAC TOE',
            img: "https://res.cloudinary.com/anshumxn09/image/upload/v1665929236/test/tic_tac_toe_abhfm0.png",
            tools : 'HTML CSS JS',
            code : "https://github.com/anshumxn09/TicTacToe.github.io.git"
        },   
    ])
  return (
    <>
    <div className="languages" id='proj'>
        <h1>PROJECTs</h1>
    </div>
    <div className="projects">
        {projectList.map((elem, index) => {
            return (
                <>  
                    <h2>{`${index+1}. ${elem.name}`}</h2>
                    <img src={elem.img} alt="" data-aos="flip-up"/>
                    <div className="btn">
                    <h4>Implementation Tools : {elem.tools}</h4>
                    <a href={elem.code} target="_blank">SOURCE CODE</a>
                    </div>
                </>
            )
        })}
    </div>
    </>
  )
}

export default Projects;