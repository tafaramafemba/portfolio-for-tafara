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
            <span>{cards.description}</span>
            <div className='separator'>
            <span className='Language'>Language: {cards.developed_in}</span>
            <span className='Language'>Pair_Programmed: {cards.Pair_Programmed}</span>
            <span className='Language'>API: {cards.API}</span>
            {/* <button>View More</button> */}
            </div>
            
          </li>))}
        </ul>
      </div>
    </div>
  )
}

export default Projects