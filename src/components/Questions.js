import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Question from './Question'

const QUESTIONS = gql`
  query Questions {
    questions {
      id
      title
      level {
        value
      }
      answers {
        id
        answer
        isCorrect
      }
    }
  }
`;

function Questions() {

  const [questions, setQuestions] = useState([])

  const { loading, error, data } = useQuery(QUESTIONS)

  useEffect(() => {
    if(data){
        console.log(data)
        setQuestions(data.questions)
    }
  }, [data])

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <React.Fragment>
      <ul>
        {questions.map(question => (
          <Question question={question} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Questions;