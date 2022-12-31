import React from 'react'
import { useState } from 'react'
import './languages.css'

const Languages = () => {
  const [languages, setLanguages] = useState([
    {
      img : "https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png",
      name : "C++"
    },
    {
      img : "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png",
      name : "PYTHON"
    },
    {
      img : "https://res.cloudinary.com/anshumxn09/image/upload/v1672523285/test/png-clipart-react-computer-icons-redux-javascript-others-symmetry-electron-removebg-preview_jvlopr.png",
      name : "REACT"
    },
    {
      img : "https://cdn.icon-icons.com/icons2/2389/PNG/512/javascript_logo_icon_145155.png",
      name : "JAVASCRIPT"
    }
  ])
  return (
    <div className='languages' id='lang'>
      <h1>Familiar With Languages</h1>
      <div className="allLang">
        {
          languages.map((elem, index) => {
            return (
              <>
                <div className="card" key={index}>
                  <span>{elem.name}</span>
                  <img src={elem.img} alt=""  height={220}/>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Languages