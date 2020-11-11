import React from 'react';
import { AiOutlineMail }  from 'react-icons/ai'
import { Link } from 'react-router-dom'

import '../../styles/pages/login.css'

function Login(){
    return(
        <div className='page-login'>
            <div className='content-wrapper'>
                <main>
                    <h1>In.</h1>
                    <p>Frase sobre a nossa ideia</p>
                </main>
            </div>

            <div className='content'>
                <h2>Evolua sua ideia</h2>
                <p>Tenha ajuda de  especialistas para todos os tipos de investimentos ao seu alcance.</p>
            </div>

            <div className='email'>
                <p>Email</p>
                <input type='text'  />
            </div>

            <Link to='/login' className='enter-login'>Avançar</Link>

        </div>

    )
}

export default Login