import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/loginContinued.css'

function LoginContinued (){
    return(
        <div className='page-login'>
            <div className='content-wrapper'>
                <main>
                    <h1>In.</h1>
                    <p>Frase sobre a nossa ideia</p>
                </main>
            </div>

            <div className='content'>
                <h2>Quase lá</h2>
                <p>Nos diga como podemos chamar você e crie uma senha segura para acessar a conta..</p>
            </div>

            <div className='name'>
                <p>Nome:</p>
                <input type='text'  />
            </div>

            <div className='password'>
                <p>Senha:</p>
                <input type='text'  />
            </div>
            
                <p>Li e concordo com os termos de uso</p>

            <Link to='/first' className='create-account'>Criar conta</Link>
        </div>
    )
}
export default LoginContinued