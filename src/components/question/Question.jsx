import React from "react";

const Question = ({ result, index, question, Option1, Option2, Option3, checkAns, next, score, questions, reset }) => {
  if (!question) {
    return <div></div>; 
  }

  return (
    <div className="container">
      <h1>ქვიზის აპლიკაცია</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          {" "}
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.option3}
            </li>
          </ul>
          <button onClick={next}>შემდეგი</button>
          <div className="index">
            {index + 1} of {questions.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            შენ მოიპოვე {score} ქულა, {questions.length}-დან. მალადეც!
          </h2>
          <button onClick={reset}>თავიდან</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Question;