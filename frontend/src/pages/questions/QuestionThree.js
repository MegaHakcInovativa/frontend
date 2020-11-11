import React from 'react';
import TopBar from '../components/topBar/TopBar';

import '../../styles/pages/questions/questionThree.css'

function QuestionThree(){
    return(
        <div className='question'>
            <TopBar width={983} to='/second'/>
            <div className='content-wrapper'>
                <div className='title'>
                    <h2>Em que estágio está seu projeto ou negócio?</h2>
                </div>

                <div className='botoes'>
                    <button type='button'>Idéia</button>
                    <button type='button'>Modelo de negócio</button>
                    <button type='button'>MVP</button>
                    <button type='button'>Possui Clientes</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionThree