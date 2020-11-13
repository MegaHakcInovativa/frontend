import React from 'react';
import { Link } from 'react-router-dom'

import '../../styles/pages/loginContinued.css'

function LoginContinued (){
    return(
        <div className='page-login'>
            <div className='content-wrapper'>
                <main>
                    <h1>elo</h1>
                    <h2>Unindo<br/> pessoas e ideias</h2>
                </main>
            </div>

            <div className='content'>
                <h2>Quase lá</h2>
                <p>Nos diga como podemos chamar você e crie uma senha segura para acessar a conta.</p>

                <div className='name'>
                    <p>Nome:</p>
                    <input type='text'  />
                </div>

                <div className='password'>
                    <p>Senha:</p>
                    <input type='text'  />
                </div>

                <div className='terms'>
                    <input type="checkbox" id="terms" name="terms"/>
                    <label for="terms"><strong>Li e concordo com os termos de uso</strong></label>
                </div>  

            </div>

            <Link to='/first' className='create-account'>Criar conta</Link>
        </div>
    )
}
export default LoginContinued