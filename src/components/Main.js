import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Questionnaire</h1>

        <ol>
        <li>Vous serez invité(e) à répondre à 20 questions l'une après l'autre.</li>
        <li>Chaque question comporte trois options. Vous ne pouvez choisir qu'une seule option.</li>
        <li>Vous pouvez revoir et modifier vos réponses avant de terminer.</li>
        <li>Les résultats seront déclarés à la fin.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Nom et prénom*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Commencer le Quiz</Link>
        </div>

    </div>
  )
}