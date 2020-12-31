import React from 'react';
import axios from 'axios';
import Questions from './components/Questions';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

class App extends React.Component {
  // State of your application
  state = {
    questions: [],
    error: null,
  };

  render() {

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Questions></Questions>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
