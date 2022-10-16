import React from 'react'
import { useState } from 'react';
import './projects.css';

const Projects = () => {
    const [projectList] = useState([
        {
            name: 'TIC TAC TOE',
            img: "https://res.cloudinary.com/anshumxn09/image/upload/v1665929236/test/tic_tac_toe_abhfm0.png",
            tools : 'HTML CSS JS',
            code : "https://github.com/anshumxn09/TicTacToe.github.io.git"
        },
        {
            name : 'Music Album',
            img : "https://res.cloudinary.com/anshumxn09/image/upload/v1665931287/test/127.0.0.1_5500_index.html_Nest_Hub_Max_2_lcooel.png",
            tools : "HTML CSS JS",
            code : "https://github.com/anshumxn09/MyDearMelancholy.github.io.git"
        }, 
        {
            name : 'Ecommerce Application',
            code : "https://github.com/anshumxn09/ecommerce.git",
            tools : "MERN Stack",
            img : "https://res.cloudinary.com/anshumxn09/image/upload/v1665931749/test/ecommerce_shj8f7.png"
        }   
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
                    <img src={elem.img} alt=""/>
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