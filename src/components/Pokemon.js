import './Pokemon.css';
import React, {Component} from 'react';
import star from './star-outline.svg';
import starFilled from './star-filled.svg';

class Pokemon extends Component {
    constructor(props) {
      super(props);
      this.state = {
        favorited: false
      }
    }

  
    render() {
    
      return (
        <ul className="pokemon-list">
           {this.props.list.map((item, id) => {
            return (
              <li key={id}>
                <h2>{item.name}</h2>
                <button onClick={() => this.props.addFavorite(item)}>
                  <img src={star} className="star" /><p>Click to favorite</p>
                  <img src={starFilled} className="star filled" /><p>Favorited!</p>
                </button>
                
              </li>
            );
          })}
      
         
        </ul>
      );
    }
}

export default Pokemon;