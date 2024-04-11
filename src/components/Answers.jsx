import questions from "../../question"
import { useRef } from 'react'

export default function Answers({ 
    activeQuestionNumber, 
    answers,
    handleSelectAnswer, 
   }) {

    // const SuffledAnswers = useRef();
    // if(!SuffledAnswers.current){
    //     SuffledAnswers.current = [...questions.answers]
    //     SuffledAnswers.current.sort(() => Math.random() - 0.5)
    // }

    // console.log("i am running")
    return (
        <ul className="mt-5 ">
                {answers.map((answer) => {
                let cssClasses = "my-8 border-2 border-indigo-500/100 mx-auto rounded-ss"
                
               
                return (
                    <li key={answer} 
                    className={cssClasses}>
                        <button
                        onClick={() => handleSelectAnswer(answer)}>
                            {answer}
                        </button></li>
                )
            })}

        </ul>

    )
}