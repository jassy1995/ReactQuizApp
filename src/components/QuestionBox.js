import React, { useState } from 'react';
import '../style.css'

const QuestionBox =({question,options,selected})=>{
    const [answer,serAnswer] = useState(options)
    return(
        <div className="QuestionBox w3-card-2 w3-center m-5">
            <div className="question w3-center mt-3">{question}</div>
            {answer.map((text,index)=>
            <button key={index} className="answerBtn col-2" onClick={()=>{
                serAnswer([text]);
                selected(text)
            }}>{text}</button>)}
                
        </div>
    )
}
export default QuestionBox