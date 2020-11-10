import React from 'react';
import { Link } from 'react-router-dom'

import './topBar.css'

function TopBar(props){
    return(
        <div className='top-bar'>

        <header>
            <Link to='/' className='hide'></Link>
            <h1>In.</h1>
            <Link to='/' className='next'>Avançar</Link>
        </header>
        <hr width={props.width}/>
        </div>
    )
}

export default TopBar