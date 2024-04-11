import questions from "../../question"

export default function Summary ({userAnswer}){


const skippedQuestion  = userAnswer.filter(answer => answer === null)
const correctAnswer = userAnswer.filter((answer,index) => questions[index].answers[0] === answer)
const numberofskipped  = Math.round((skippedQuestion.length/userAnswer.length)*100);
const correctlyanswered  = Math.round((correctAnswer.length/userAnswer.length)*100);
const wronganswered = 100 - correctlyanswered - numberofskipped ;
return(


        <div className="mx-auto">
            <h2>QuizCompletwed</h2>
            <p>{numberofskipped} % skipped</p>
            <p>{correctlyanswered} % answered correctly</p>
            <p>{wronganswered} % incrooect</p>
        </div>
        
    )
}