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
            <div className='separator'>
            <span className='Language'>{cards.developed_in}</span>
            <button>View More</button>
            </div>
            
          </li>))}
        </ul>
      </div>
    </div>
  )
}

export default Projects