import React from 'react';
import axios from 'axios';

class App extends React.Component {
  // State of your application
  state = {
    questions: [],
    error: null,
  };

  // Fetch your questions immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('https://ce-vin-ci-cms.herokuapp.com/questions');
      this.setState({ questions: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { error, question } = this.state;
    /* eslint-enable no-unused-vars */

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.questions.map(question => (
            <li key={question.id}>{question.Question}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
