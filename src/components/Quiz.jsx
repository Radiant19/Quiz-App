import { useState,useCallback } from "react";

import Question from "./Question";
import questions from "../../question";
import Summary from "./Summary";

export default function Quiz (){

const [useranswer,setuserAnswer]= useState([]);
let activeQuestionNumber

 activeQuestionNumber =(useranswer.length);
//  console.log(activeQuestionNumber)
const quizcompleted = activeQuestionNumber === questions.length;
console.log(quizcompleted)

const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
    setuserAnswer(prevUserAnswer => {
        return [...prevUserAnswer,selectedAnswer]
    }),[]})


if(quizcompleted)
return(
    <Summary userAnswer={useranswer}/>
)
 

return(
   <div>
    <Question 
    activeQuestionNumber={activeQuestionNumber}
    onSelectAnswer={handleSelectAnswer}
    useranswer={useranswer}
    />
   </div>)
}