import React from 'react';

function Question({ question }) {
  
    return (
        <React.Fragment>
          <li key={question.id}>{question.title}</li>
          <ul>
            {question.answers.map(answer => (
                <li key={answer.id}>{answer.answer} {answer.isCorrect}</li>
            ))}
          </ul>
        </React.Fragment>
    );
  }
  
  export default Question;