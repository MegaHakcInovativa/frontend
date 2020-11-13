import React from 'react';
import { AiOutlineMail }  from 'react-icons/ai'
import { Link } from 'react-router-dom'

import '../../styles/pages/login.css';

function Login(){
    return(
        <div className='page-login'>
            <div className='content-wrapper'>
                <main>
                    <h1>elo</h1>
                    <h2>Unindo<br/> pessoas e ideias</h2>
                </main>
            </div>

            <div className='content'>
                <h2>Evolua sua ideia</h2>
                <p>Tenha ajuda de  especialistas para todos os tipos de investimentos ao seu alcance.</p>
                
                <div className='email'>
                    <p>Email</p>
                    <input type='text'/>
                </div>  
            </div>

            <Link to='/login' className='enter-login'>Avançar</Link>

        </div>

    )
}

export default Login