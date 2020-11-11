import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { GiGraduateCap } from 'react-icons/gi' 

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

            </div>

        </div>
    )
}

export default SideBar