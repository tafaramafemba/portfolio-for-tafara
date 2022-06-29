import React from 'react'
import { projects } from './projects-info'
import '../project.css'

function Projects() {
  return (
    <div>
      <div className='card-container'>
        <ul className='grid-container'>
          {projects.map(cards => (
          <li className='project-container' key={cards.id}>
            <h2 className='title'>{cards.project}</h2>
            <span className='descrip'>{cards.description}</span>
            <div className='separator'>
            <p><span className='lang'>Language: </span><span className='Language'>{cards.developed_in}</span> <span className='Language'>{cards.developed_in2}</span></p>
            <p><span className='pair'>Pair_Programmed: </span><span className='pair-prog'>{cards.Pair_Programmed}</span></p>
            <p><span className='ipa'>API: </span><span className='api'>{cards.API}</span></p>
            <a href={cards.Repo}><button typeof='button' className='site'>Live Demo</button></a>
            </div>
            
          </li>))}
        </ul>
      </div>
    </div>
  )
}

export default Projects