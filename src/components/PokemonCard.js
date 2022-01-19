import './Pokemon.css';
import React, {Component} from 'react';
import star from './star-outline.svg';
import starFilled from './star-filled.svg';

class PokemonCard extends Component {
    constructor(props) {
      super(props);
        this.state = {
            favorited: false
        }
        this.addFavorite = this.addFavorite.bind(this);

    }

    addFavorite(name) {
        this.setState({
            favorited: true
        });
        this.props.addFavorite(name);
    }

  
    render() {
     
        return (
            <li>
            <h2>{this.props.item.name}</h2>
            <button onClick={() => this.addFavorite(this.props.item)}>
                {this.props.favorited ? 
                    <img src={starFilled} className="star filled" />
                :
                <img src={star} className="star" />

            }
            </button>
            </li>
        );
    }
}

export default PokemonCard;