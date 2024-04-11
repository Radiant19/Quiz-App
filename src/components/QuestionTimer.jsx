import { useEffect, useState } from "react";

export default function QuestionTimer({
    timer,
    onTimeOut,
    activeQuestionNumber , 
  }){

 const [remainingTime,setRemainingTime] = useState(timer)

useEffect( () => {
    console.log("Starting timer")
  const progtimer = setTimeout(onTimeOut,timer);
  return () => {
    console.log("clearing timer")
    clearTimeout(progtimer);
    setRemainingTime(timer)
  }
},[timer,onTimeOut,activeQuestionNumber])
 
useEffect(() => {
    const interval  = setInterval(() => {
        console.log("starting iIterval")
        setRemainingTime( prevRemainingTime => prevRemainingTime - 100)
     }
     ,100)
     return () =>{
      console.log("clearing interval")
        clearInterval(interval);
      }
},[])
 
 
return(
     <progress className="bg-blue-800 text-blue-700" max={timer} value={remainingTime} />
)
}