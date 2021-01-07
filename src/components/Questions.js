import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

const QUESTIONS = gql`
  query Questions {
    questions {
      id
      title
      level {
        value
      }
      answers {
        answer
        Correct
      }
    }
  }
`;

function Questions(props) {

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
      <h1>Score: {props.score}</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    score: state.score
  };
};

export default connect(mapStateToProps)(Questions);