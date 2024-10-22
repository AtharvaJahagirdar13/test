import React from 'react'
import './Hero.css'
import hero_right from '../Assets/hero_right.jpg'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h1>Match Mania</h1>
            <div className="hero-desc">
                <p>FIND PLAYERS & VENUES NEARBY </p>
               <p> Seamlessly explore sports venues and play with sports enthusiasts just like you!</p>

            </div>
        </div>
       
        <div className="hero-right">
            <img src={hero_right} alt="" />
            

        </div>
    </div>
    
  )
}

export default Hero