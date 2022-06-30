import React from 'react'
import '../menubottom.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom';

function MenuBottom() {
  return (
    <div className='menu-bottom'>
      <ul className='menu-list'>
            <Link style={{textDecoration: 'none'}} to="/">
            <li className = 'mrow'><div><HomeIcon /></div><div></div></li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/about">
            <li className = 'mrow'><div><PersonIcon /></div><div></div></li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/projects">
            <li className = 'mrow'><div><WorkOutlineIcon /></div><div className='linktext'></div></li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/contact">
            <li className = 'mrow'><div><ContactPageIcon /></div><div></div></li>
            </Link>
      </ul>
      
    </div>
  )
}

export default MenuBottom;