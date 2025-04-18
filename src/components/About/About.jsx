import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
    <img src={about_img} alt="" className='about-img'/>
    <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

      </div>
      <div className="about-right">
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Nurturing Tomorrow's Leaders Today</h2>
    <p>Our university is dedicated to excellence in education, research, and innovation. We provide a dynamic learning environment with modern facilities and expert faculty.</p>
    <p>We offer top-quality education, state-of-the-art facilities, and a vibrant campus life. Join us to unlock your potential and achieve academic success.</p>
    <p>we foster learning, creativity, and leadership. With expert faculty and cutting-edge resources, we prepare students. Be part of a globally recognized institution and shape your dreams.</p>
      </div>
    </div>
  )
}
export default About
