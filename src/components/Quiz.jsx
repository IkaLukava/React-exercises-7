import React, { useState , useRef} from 'react'
import './Quiz.css'
import {data} from '../questions/data'

const Quiz = () => {

    let[index, setIndex]= useState(0);
    let [question,setQuestion]= useState(data[index]);
    let [lock,setLock]= useState(false);
    let [score,setScore]=useState(0);
    let [result,setResult]=useState(false);

    let Option1= useRef(null);
    let Option2= useRef(null);
    let Option3= useRef(null);

    let Option_array =[Option1,Option2,Option3];

    const checkAns =(e,ans)=>{
        if(lock===false){
            if(question.ans===ans){
                e.target.classList.add("სწორია");
                setLock(true);
                setScore(prev=>prev+1);
            }else{
                e.target.classList.add("არასწორია");
                setLock(true);
                Option_array[question.ans-1].current.classList.add("სწორია");
            }
        }
    }

    const next = ()=>{
        if(lock===true){
            if(lock===true){
                if(index===data.length -1){
                    setResult(true);
                    return 0;
                }
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false)
            Option_array.map((option)=>{
                option.current.classList.remove('არასწორია');
                option.current.classList.remove('სწორია');
                return null;
            })
        }
    }

    const reset =()=>{
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

  return (
    <div className='container'>
        <h1>ქვიზის აპლიკაცია</h1>
        <hr/>
        {result? <></> : <>  <h2>{index+1}. {question.question}</h2>
        <ul>
           <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li> 
           <li ref={Option2}  onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li> 
           <li ref={Option3}  onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li> 
        </ul>
        <button onClick={next}>შემდეგი</button>
        <div className="index">{index+1} of {data.length} questions</div>
        </>
        }
        {result? <><h2>შენ მოიპოვე {score} ქულა, {data.length}-დან. მალადეც!</h2>
        <button onClick={reset}>თავიდან</button></> : <></>}
        
    </div>
  )
}

export default Quiz