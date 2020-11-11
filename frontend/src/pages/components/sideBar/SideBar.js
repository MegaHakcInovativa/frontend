import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineMail } from 'react-icons/ai'
import { GiGraduateCap } from 'react-icons/gi' 
import { MdPersonOutline } from 'react-icons/md'
import { FiSettings, FiLogOut } from 'react-icons/fi'

import './sideBar.css'

function SideBar(){
    return(
        <div className='side'>
            <div className='logo'>
                <h1>In.</h1>
            </div>

            <div className='icons'>
                <Link to='/'>
                    <AiFillHome size={26} color='#ffffff' />
                </Link>

                <Link to='/'>
                    <GiGraduateCap size={26} color='#ffffff' />
                </Link>

                <Link to='/'>
                    <MdPersonOutline size={26} color='#ffffff'/>
                </Link>

                <Link to='/'>
                    <AiOutlineMail size={26} color='#ffffff' />
                </Link>

                <Link to='/'>
                    <FiSettings size={26} color='#ffffff' />
                </Link>

            </div>

            <footer className='exit'>
                <Link to='/' >
                    <FiLogOut size={26} color='#ffffff'/>
                </Link>
            </footer>

        </div>
    )
}

export default SideBar