import React , {useState , useEffect} from 'react'
import data from '../database/data'
import { useSelector } from 'react-redux';
import { useFetchQestion } from '../hooks/FetchQuestion';


export default function Questions() {

    const [checked , setChecked] = useState(undefined);
    const[{isLoading , apiData , serverError} ] = useFetchQestion()
    const question = data[0]

    const {questions} = useSelector(state => state)
    useEffect(() => {
        console.log(questions);
    })
    function onSelect(){
        setChecked(false);
        console.log('radio button changed')
    }

    if(isLoading) return <h3 className='text light'>isLoading</h3>
    if(serverError) return <h3 className='text light'>{serverError} || "Unknown Error"</h3>
    return (
        <div className='questions'>
            <h2 className='text-light'>{question.question}</h2>

            <ul key={question.id}>
                {
                    question.options.map((q,i) => (
                        <li key={i}>
                            <input type='radio' value={checked} name='options' id={`q${i}-option`} onChange={onSelect}>
                            </input>
                            
                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className='check'></div>
                        </li>
                    ))
                }
               
            </ul>
        </div>
    )
}



// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useFetchQestion } from '../hooks/FetchQuestion';

// export default function Questions() {
//     const [checked, setChecked] = useState(undefined);
//     const [{ isLoading, apiData, serverError }] = useFetchQestion();
//     const { questions } = useSelector(state => state);

//     useEffect(() => {
//         if (questions && questions.queue && questions.queue.length > 0) {
//             console.log(questions.queue[0]);
//         }
//     }, [questions]);

//     function onSelect() {
//         setChecked(false);
//         console.log('radio button changed');
//     }

//     if (isLoading) return <h3 className='text-light'>Loading...</h3>;
//     if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>;

//     const question = questions && questions.queue && questions.queue.length > 0
//         ? questions.queue[0]
//         : { question: '', options: [] };

//     return (
//         <div className='questions'>
//             <h2 className='text-light'>{question.question}</h2>
//             <ul key={question.id}>
//                 {question.options.map((q, i) => (
//                     <li key={i}>
//                         <input type='radio' value={checked} name='options' id={`q${i}-option`} onChange={onSelect} />
//                         <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
//                         <div className='check'></div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
