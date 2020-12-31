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

function Questions() {
  const { loading, error, data } = useQuery(QUESTIONS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.questions.map(question => (
        <li key={question.id}>{question.title}</li>
      ))}
    </ul>
  );
}

export default Questions