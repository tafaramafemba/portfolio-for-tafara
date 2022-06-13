import React from 'react'
import '../about.css'

function About() {
  return (
    <div className='grounding'>
      <div className='about-container'>
        <img src='about-image.png' alt='about-me-image' className='about-img' />
        <div className='text-container'>
          <h1 className='name'>Tafara Mafemba</h1>
          <h3 className='profession'>Full-Stack Web Developer</h3>
          <img src='languages.png' alt='languages' className='languages-img' />
        </div>
      </div>

      <p className='about-me sb'>I am a full-stack web developer. I am currently a student at Microverse. A typical day for me involves 8 hours of coding, collaboration within multicultural teams and a perfect mimic of a real working environment.
        What makes me special is not limited to my technical skills. I am also a certified NLP Practitioner. This means clear and effective communication is one of my core strengths. I am also a former rugby player for my province so discipline and diligence are qualities I have picked up along the way.</p>
      <p className='recruiter sb1'>Great! We would like to schedule an interview with you</p>
    </div>
  )
}

export default About