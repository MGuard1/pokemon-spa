import './App.css';
import PokemonList  from './components/PokemonList';
import FavoritesList  from './components/FavoritesList';

import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
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
          // Add a favorited property to the object
          const data = response.results.map(obj => ({ ...obj, favorited: false }))
          this.setState({
            items: data
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  // sort Pokemon results alphabetically
  sortPokemon() {
    const sortedData = this.state.items;
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      items: sortedData
    })
  }

  // add or remove item from favorites 
  addFavorite(i) {
    const { favorites } = this.state;
    let newData = this.state.items;

    // if the favorites array already includes the item, remove it and update the items favorited property
    if (favorites.some(item => item.name === i.name)) {
      this.setState({
        items: newData.map(
          item => item.name === i.name ? { ...item, favorited: false } : item
        )
      })
      this.setState({ favorites: favorites.filter((item) => item.name !== i.name )});

    } else {
      // if it doesn't include the item, add it and update the items favorited property  
      this.setState({
        items: newData.map(
          item => item.name === i.name ? { ...item, favorited: true } : item
        )
      })
      i.favorited = true;
      this.setState({
        favorites: [...favorites, i]
      });
    }
  }


  render() {
    const { error, items, favorites } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src="/pokeapi_256.png" className="App-logo" alt="PokeAPI logo" />
            <p>Click a star to favorite a Pokemon!</p>
            <button onClick={this.sortPokemon}>Sort Alphabetically</button>
          </header>

          <div className="data">
            <PokemonList list={items} addFavorite={this.addFavorite} /> 
            
            <FavoritesList list={favorites} addFavorite={this.addFavorite} />
          </div>
          
        </div>
      );
    }
  }
  
}

export default App;
