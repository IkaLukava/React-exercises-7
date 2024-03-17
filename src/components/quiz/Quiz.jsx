import React, { useState, useRef, useEffect } from "react";
import "./quiz.css";
import Question from "../question/Question";
import question from "../../data/questions.json";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);

  const Option_array = [Option1, Option2, Option3];

  useEffect(() => {
    setQuestions(question);
  }, []);

  const checkAns = (e, ans) => {
    if (!lock) {
      if (questions[index].ans === ans) {
        e.target.classList.add("სწორია");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("არასწორია");
        setLock(true);
        Option_array[questions[index].ans - 1].current.classList.add("სწორია");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === questions.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setLock(false);
      Option_array.forEach((option) => {
        option.current.classList.remove("არასწორია");
        option.current.classList.remove("სწორია");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div>
      <Question
        result={result}
        index={index}
        question={questions[index]}
        Option1={Option1}
        Option2={Option2}
        Option3={Option3}
        checkAns={checkAns}
        next={next}
        score={score}
        questions={questions}
        reset={reset}
      />
    </div>
  );
};

export default Quiz;
