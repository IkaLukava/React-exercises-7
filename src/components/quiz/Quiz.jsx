import React, { useState, useRef } from "react";
import "./quiz.css";
import Question from "../question/Question";
import {data} from '../../data/questions'; 

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);

  let Option_array = [Option1, Option2, Option3];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("სწორია");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("არასწორია");
        setLock(true);
        Option_array[question.ans - 1].current.classList.add("სწორია");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      Option_array.forEach((option) => {
        option.current.classList.remove("არასწორია");
        option.current.classList.remove("სწორია");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div>
      <Question
        result={result}
        index={index}
        question={question}
        Option1={Option1}
        Option2={Option2}
        Option3={Option3}
        checkAns={checkAns}
        next={next}
        score={score}
        data={data}
        reset={reset}
      />
    </div>
  );
};

export default Quiz;