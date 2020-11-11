import React from 'react';
import TopBar from '../components/topBar/TopBar';

import '../../styles/pages/questions/questionThree.css'

function QuestionThree(){
    return(
        <div className='question'>
            <TopBar width={983} to='/user'/>
            <div className='content-wrapper'>
                <div className='title'>
                    <h2>Em que estágio está seu projeto ou negócio?</h2>
                </div>

                <div className='botao'>
                    <button type='button'>Idéia</button>
                    <hr></hr>
                    <button type='button'>Modelo de negócio</button>
                    <hr></hr>
                    <button type='button'>MVP</button>
                    <hr></hr>
                    <button type='button'>Possui Clientes</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionThree