import './Pokemon.css';
import React, {Component} from 'react';

class Pokemon extends Component {
    constructor(props) {
      super(props);
    }

  
    render() {
      return (
        <div className="pokemon-card">
          <h2>{this.props.name}</h2>
        </div>
      );
    }
}

export default Pokemon;