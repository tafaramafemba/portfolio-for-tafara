import React from 'react'
import '../sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='bar'>
      <ul className='ul-bar'>
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
            <p className='footertext'>Created by Tafara Mafemba</p>
      <ul className='social-media'>    
        <li className='icon'><a href='https://www.linkedin.com/in/tafara-mafemba/' className='icon'><LinkedInIcon /></a></li>
        <li><a href='https://github.com/tafaramafemba/' className='icon'><GitHubIcon /></a></li>
        <li><a href='https://twitter.com/the_real_you___' className='icon'><TwitterIcon /></a></li>
      </ul>
      </ul>
      
    </div>
  )
}

export default Sidebar;