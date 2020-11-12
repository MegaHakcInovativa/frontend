import React from 'react';
import { Link } from 'react-router-dom'

import './topBar.css'

// Quando for usar o elemento passar a propriedade width com um numero e a propriedade to que vai indicar pra onde ela vai quando clicar em avançar


function TopBar(props){
    return(
        <div className='top-bar'>

        <header>
            <Link to='/' className='hide'></Link>
            <h1>elo</h1>
            <Link to={props.to} className='next'>Avançar</Link>
        </header>
        <hr width={props.width}/>
        </div>
    )
}

export default TopBar