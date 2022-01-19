import './App.css';
import Pokemon from './components/Pokemon.js'
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      favorites: []
    };
    this.sortPokemon = this.sortPokemon.bind(this);
    this.addFavorite = this.addFavorite.bind(this);

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

  // sort Pokemon results alphabetically
  sortPokemon() {
    const sortedData = this.state.items
      .sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      items: sortedData
    })
  }

  addFavorite(i) {
    const { favorites } = this.state;

    // if the favorites array already includes the item, remove it
    if (favorites.includes(i)) {
      this.setState({ favorites: favorites.filter((item) => item !== i )});
    } else {
      this.setState({
        favorites: [...favorites, i]
      });
    }
    console.log(this.state.favorites);
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src="/pokeapi_256.png" className="App-logo" alt="PokeAPI logo" />
            <button onClick={this.sortPokemon}>Sort Alphabetically</button>
          </header>

        <div className="data">
          <div className="pokemon">
            <Pokemon list={this.state.items} addFavorite={this.addFavorite} />
          </div>
          <div className="favorites">
            <Pokemon list={this.state.favorites}></Pokemon>
          </div>
        </div>
          
        </div>
      );
    }
  }
  
}

export default App;
