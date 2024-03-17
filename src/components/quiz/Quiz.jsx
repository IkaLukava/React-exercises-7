import React, { useState, useRef } from "react";
import "./quiz.css";
import Question from "../question/Question";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      "question": "რა ჰქვია ვარსკვლავურ ომებში მწვანე ჯედაის? ",
      "option1": " იოდა ",
      "option2": " კენერი ",
      "option3": "ჰატი ჯაბა",
      "ans":1
  },
  {
      "question": " ვინ შეძლო ვარველში თორის ჩაქუჩის აღება?(გარდა თორისა) ",
      "option1": " რკინის კაცმა ",
      "option2": " ადამიანი ობობამ ",
      "option3": " კაპიტანი ამერიკამ ",
      "ans":3 
  },
  {
      "question": " ვის დაუჯდა სიცოცხლის ფასად თანოსის დამარცხება? ",
      "option1": " რკინის კაცს ",
      "option2": " დოქტორ სტრეინჯს ",
      "option3": "კაპიტან ამერიკას",
      "ans":1 
  },
  {
      "question": "რომელია ალკოჰოლის ფორმულა? ",
      "option1": "  CaSO4  ",
      "option2": " C2H6O ",
      "option3": " რავიცი კაცო მე",
      "ans":2 
  },
  {
      "question": " ... ბელგიის დედაქალაქია. ",
      "option1": "  კიშინიოვი  ",
      "option2": " დუბლინი ",
      "option3": " ბრიუსელი ",
      "ans":3 
  },
  {
      "question": " რა ჰქვია ჟირაფის ნაშიერს? ",
      "option1": "  ბაცაცა  ",
      "option2": " ბიჟინა ",
      "option3": " ბოჟიკო ",
      "ans":3 
  },
  {
      "question": " მსოფლიოს მერვე საოცრება არის... ",
      "option1": "  კაბადოკია  ",
      "option2": " ეიფელი ",
      "option3": " ჩვენს კლასში გაკვეთილის ჩაბარება ",
      "ans":1 
  },
  {
      "question": " რატომ ვერ მივდივართ საქართველოს თამაშზე? ",
      "option1": "  ადგილები აღარ არის  ",
      "option2": " ფული არ არის ",
      "option3": " ორივე ",
      "ans":1 
  },
  {
      "question": " სად ვსწავლობ მე ?",
      "option1": "  სახლში  ",
      "option2": " სკოლაში ",
      "option3": " სოთინ მუთუნ ვაორექ დო ვართ იპიქ ",
      "ans":3 
  },
  {
      "question": " ორი ჩიტი მიფრინავს,ერთი განსაკუთრებით... ",
      "option1": " ვეთანხმები ",
      "option2": " არ ვეთანხმები ",
      "option3": "ორივე",
      "ans":1 
  }
  ]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);

  const Option_array = [Option1, Option2, Option3];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (questions[index].ans === ans) {
        e.target.classList.add("სწორია");
        setLock(true);
        setScore(prev => prev + 1);
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
      setIndex(prevIndex => prevIndex + 1);
      setLock(false);
      Option_array.forEach(option => {
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