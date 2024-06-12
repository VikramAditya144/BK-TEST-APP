import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
export default function Result(){
    function onRestart(){
        console.log('restarted');
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Results</h1>

            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'>Weekly Sunday Test</span>
                </div>

                <div className='flex'>
                    <span>Total Score : </span>
                    <span className='bold'>50</span>
                </div>

                <div className='flex'>
                    <span>Total Questions</span>
                    <span className='bold'>30</span>
                </div>

                <div className='flex'>
                    <span>Total Score</span>
                    <span className='bold'>30</span>
                </div>

                <div className='flex'>
                    <span>Result</span>
                    <span className='bold'>PASS</span>
                </div>
            </div>
            
            <div className='start'>
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>
            <div className='container'>
                <ResultTable></ResultTable>
            </div>
            
        </div>
    )
}