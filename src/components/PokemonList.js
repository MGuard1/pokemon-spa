import './PokemonList.css';
import star from './star-outline.svg';
import starFilled from './star-filled.svg';

function PokemonList(props) {

  return (
    <ul className="pokemon">
        {props.list.map((item, id) => {
        return (
          <li key={id} className="pokemon-card">
            <button onClick={() => props.addFavorite(item)}>
            {item.favorited ?
              <img src={starFilled} className="star filled" />
              :
              <img src={star} className="star" />
            }
            </button>
            <h2>{item.name}</h2>
          </li>
        );
      })}   
    </ul>
  );
}

export default PokemonList;