import React from 'react';
import { Link }  from 'react-router-dom'

import frame from '../../../assets/img/Frame.svg'

import './courses.css'

function Courses (props){
    return(
        <div className='courses'>
            <img src={frame} alt ='' />
            <h3>{props.name}</h3>
            <p>{props.time}</p>
            <p>{props.avaliation} </p>
            <Link to=''>Ver curso</Link>
        </div>
    )
}

export default Courses