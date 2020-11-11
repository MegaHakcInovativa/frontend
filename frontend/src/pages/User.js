import React from 'react';

import SideBar from './components/sideBar/SideBar'
import UserIcon from './components/userIcon/UserIcon';

function User(){
    return(
       <div className='user-area'>
            <SideBar />
            <UserIcon />
            <div className='welcome'>
                <h1>Olá, nome da startup</h1>
            </div>
       </div>
    )
}

export default User