import React, { useEffect } from 'react'
import Questions from './Questions'
import {useSelector} from 'react-redux'


export default function Quiz(){
    const state = useSelector(state => state)
    useEffect(() => {
        console.log(state)
    })
    function onNext(){
        console.log('on next click');
    }
    function onPrev(){
        console.log('on prev click');
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Om Shanti</h1>

            <Questions></Questions>
            
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}


