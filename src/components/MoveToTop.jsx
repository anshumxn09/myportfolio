import React from 'react'
import { useState, useEffect } from 'react';
import './MoveToTop.css';

const MoveToTop = () => {
    const [value, setValue] = useState('hide');
    const moveMe = () => {
        window.scrollTo({
            top : 0,
            left : 0,
            behavior : 'smooth'
        })
    }
    const listenToScroll = () => {
        let heightToHidden = 400;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heightToHidden){
            setValue("")
        }else setValue("hide");
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    }, [])
  return (
    <div className={`moveTop ${value}`} onClick={moveMe}><i className="fa-solid fa-arrow-up"></i></div>
  )
}

export default MoveToTop