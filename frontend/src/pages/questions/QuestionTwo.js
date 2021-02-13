import React, { useState } from 'react';
import TopBar from '../components/topBar/TopBar';

import '../../styles/pages/questions/questionTwo.css';

function QuestionTwo(){

  const [habilities, setHabilities] = useState([])
  const [hability, setHability] = useState()

  return(
    <div className='question'>
      <TopBar width={596} to='/thirth'/>

      <div className='content-wrapper'>
        <div className='title'>
            <h2>Que habilidades específicas você possui?</h2>
            <p>Adicione quantos quiser!</p>
        </div>

        <div className='botoes'>

            <button type='button'className={!hability? 'active' : ''} onClick={()=> setHabilities('Desing')}>Desing</button>
            <button type='button'className={hability? 'active' : ''}onClick={()=> setHabilities('Marketing')}>Marketing</button>
            <button type='button'className={hability? 'active' : ''}onClick={()=> setHabilities('Negócios')}>Negócios</button>
            <button type='button'className={hability? 'active' : ''}onClick={()=> setHabilities('Desenvolvedor')}>Desenvolvedor</button>
            <button type='button'className={!hability? 'active' : ''}onClick={()=> setHabilities('UX')}>UX</button>
            <button type='button'className={hability? 'active' : ''}onClick={()=> setHabilities('Gestão')}>Gestão</button>
          </div>
        </div>  
      </div>
    )
}

export default QuestionTwo;