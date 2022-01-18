import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    // grab data from the api using AJAX
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(
        (response) => {
          console.log(response);
          this.setState({
            isLoaded: true,
            items: response.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {items.map((item, i) => <p key={i}>Here</p>)}
        </header>
      </div>
    );
  }
  
}

export default App;
