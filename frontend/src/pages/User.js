import React from 'react';

import SideBar from './components/sideBar/SideBar'
import UserIcon from './components/userIcon/UserIcon';
import Courses from './components/courses/Courses';

//img
import graphic from '../assets/img/grafico.svg'
import mentoria from '../assets/img/mentoria.svg'

import '../styles/pages/user.css'

function User(){
    return(
       <div className='user-area'>
            <SideBar logo = {false}/>
            <UserIcon />
            <div className='welcome'>
                <h1>Olá, Nome da Startup</h1>
                <p>Crie seu modelo de negócio</p>
            </div>

            <div className='planing'>
                <h3>Planejamento</h3>
                <div className='plano'>
                    <img src='' alt='' />
                    <div>
                        <h4>Canvas</h4>
                        <p>Business model canva</p>
                    </div>
                    <p>83%</p>
                    <button type='button'>Confirmar</button>
                </div>
                <p>Próxima etapa: MVP</p>
            </div>

            <div className='cursos'>
                <h2>Cursos</h2>

                <Courses name='Modelagem e Validação da Proposta de Valor ' time='6h 30min' avaliation ={4.9} />
                <Courses name='Modelagem financeira' time='5h 45min' avaliation={3.5} />
                <Courses name='Acesso ao merado' time='5h 00min' avaliation={4.0} />
            </div>

            <div className='info'>
                <div className='project'>
                    <div>
                        <h1>11</h1>
                        <h3>Cursos</h3>
                    </div>

                    <div>
                        <h1>4</h1>
                        <h3>Planejamentos em andamento </h3>
                    </div>
                </div>

                <div className='advance'>
                    <h2>Avanço</h2>
                    <div className='graphic'>
                        <div className='information'>
                            <h3>Horas</h3>
                            <h3>Meus Cursos</h3>
                        </div>
                        <h3>Semana</h3>
                    </div>
                    <img src={graphic} alt='grafico'/>
                </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={mentoria} alt='mentoria' />


            </div>

       </div>
    )
}

export default User