import React from 'react'
import '../sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='bar'>
      <ul>
      <h1 className='header-text'>My Portfolio</h1>
            <Link style={{textDecoration: 'none'}} to="/">
            <li className = 'row'><div><HomeIcon /></div><div>Home</div></li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/about">
            <li className = 'row'><div><PersonIcon /></div><div>About Me</div></li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/projects">
            <li className = 'row'><div><WorkOutlineIcon /></div><div className='linktext'>My Projects</div></li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/contact">
            <li className = 'row'><div><ContactPageIcon /></div><div>Get in touch with me</div></li>
            </Link>
      </ul>
    </div>
  )
}

export default Sidebar;