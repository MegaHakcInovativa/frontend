import React from 'react';
import { FiBell } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './userIcon.css'

import UserPicture from '../../../assets/img/ProfilePicture.svg'

function UserIcon (){
    return(
        <div className='user'>
            <Link t0=''>
                <FiBell size={30.63} />
            </Link>
            <Link to ='/perfil'>
                <img src={UserPicture} alt='user image' />
            </Link>

        </div>
    )
}

export default UserIcon