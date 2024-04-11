import { useState } from "react"
import questions from "../../question"
import Answers from "./Answers"
import QuestionTimer from "./QuestionTimer"
export default function Question({
    activeQuestionNumber,
    onSelectAnswer,
    
}){

    const [answer,setAnswer] = useState({
        seletedAnswer : null,
        
    })

    let time =10000
    function handleSelectAnswer(answer){
        let isCorrect = questions[activeQuestionNumber].answers[0] === answer;
       setTimeout(() => {
        console.log(isCorrect)
        },
        1000)
       setAnswer({ 
            seletedAnswer: answer , 
       })
        onSelectAnswer(answer)
     }

    //  let answerState = ' '
    //  if(answer.seletedAnswer !== null){
    //     isCorrect ? answerState = "correct" : answerState = "false"
    //  }
    
    
     return(
        <div className=" flex-col ml-[500px] bg-[#c4b5fd] h-[500px] w-fit rounded-md">
           <QuestionTimer 
            timer={time}
           onTimeOut={() => {handleSelectAnswer(null)}}
           activeQuestionNumber={activeQuestionNumber}
           />
        <h1 className=" text-blue-600 uppercase font-bold text-2xl mb-3">{questions[activeQuestionNumber].text}</h1>
        <Answers 
       
        
          activeQuetionNumber={activeQuestionNumber} 
          answers={questions[activeQuestionNumber].answers}
          handleSelectAnswer={handleSelectAnswer}/>
        </div>
    )
}