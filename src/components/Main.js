import React , {useRef}from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
import img from '/Users/vikramaditya./Desktop/BK-TEST/client/src/resources/bk-logo-white.png'
export default function Main(){
    const inputRef = useRef(null)
    return (
        
        <div className='container'>
           <div className='logo'>
            <img src={img} alt=''></img>
           </div>
            <h1 className='title text-light'>Om Shanti</h1>

            <ol>
                <li>
                    Solve All the Questions
                </li>

                <li>
                    Complete in Allocated time
                </li>
                <li>
                    Be Honest , Give your Best
                </li>
            </ol>

            <form id= "form">
                <input  ref = {inputRef} className='userid' type='text' placeholder='Username'></input>
                <input  ref = {inputRef} className='userid' type='tel' placeholder='Phone No'></input>
                {/* <input type='number' placeholder='Number'></input> */}
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'}>Start Test</Link>
            </div>
        </div>
    )
}
