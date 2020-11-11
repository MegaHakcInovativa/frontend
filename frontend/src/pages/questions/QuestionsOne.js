import React from 'react';
import TopBar from '../components/topBar/TopBar';

import '../../styles/pages/questions/questionOne.css'

function QuestionOne(){
    return(
        <div className='question'>
            <TopBar width={310} to='/second'/>
            <div className='content-wrapper'>
                <div className='title'>
                    <h2>Quase lá</h2>
                    <p>Oi, como podemos ajudar você?</p>
                </div>

                <div className='check'>
                    <input type='radio' id='cofundador' name='value' ></input>
                    <label for='value'><h4>Encontre um cofundador</h4><p>Conecte-se com potenciais parceiros de negócios.</p></label>
                </div>

                <div className='check'>
                    <input type='radio' id='mentor' name='value' ></input>
                    <label for='value'><h4>Encontre um mentor</h4><p>Conecte-se com grandes consultores para ajudar a orientá-lo.</p></label>
                </div>

                <div className='check'>
                    <input type='radio' id='consultor' name='value' ></input>
                    <label for='value'><h4>Torne-se um consultor (inscreva-se)</h4><p>Ajude as startups a crescer compartilhando seu conhecimento.</p></label>
                </div>

                <div className='check'>
                    <input type='radio' id='neworking' name='value' ></input>
                    <label for='value'><h4>Apenas networking</h4><p>Explore projetos paralelos, empregos, oportunidades de freelancer e mentoria.</p></label>
                </div>

                
            </div>
        </div>
    )
}

export default QuestionOne