import './PokemonList.css';
import star from './star-outline.svg';
import starFilled from './star-filled.svg';

function PokemonList(props) {

  return (
    <ul className="pokemon">
        {props.list.map((item, id) => {
        return (
          <li key={id} className="pokemon-card">
            {item.favorited ?
              <button data-testid="unfavorite" aria-label={`select to remove ${item.name} from favorites`} onClick={() => props.addFavorite(item)}>
                <img src={starFilled} className="star filled" alt="" />
              </button>
              :
              <button data-testid="favorite" aria-label={`add ${item.name} to favorites`} onClick={() => props.addFavorite(item)}>
                <img src={star} className="star" alt="" />
              </button>
            }
            <h2 data-testid="pokemon-name">{item.name}</h2>
          </li>
        );
      })}   
    </ul>
  );
}

export default PokemonList;