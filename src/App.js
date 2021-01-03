import React from 'react';
import Questions from './components/Questions';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.CMS_GRAPHQL_ENDPOINT,
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
