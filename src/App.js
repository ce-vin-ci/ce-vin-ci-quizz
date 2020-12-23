import React from 'react';
import axios from 'axios';

class App extends React.Component {
  // State of your application
  state = {
    restaurants: [],
    error: null,
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('https://ce-vin-ci-cms.herokuapp.com/restaurants');
      this.setState({ restaurants: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { error, restaurant } = this.state;
    /* eslint-enable no-unused-vars */

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
