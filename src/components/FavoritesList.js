import './FavoritesList.css';

function FavoritesList(props) {

  return (
    <div className="favorites">
        <div className="heading">
            <h2>Favorites List</h2>
        </div>
        <ul>
            {props.list.map((item, id) => {
            return (
            <li key={id} className="favorite-item" data-testid="favorite-item">
                <button 
                  aria-label={`remove ${item.name} from favorites`} 
                  title={`remove ${item.name} from favorites`} 
                  onClick={() => props.addFavorite(item)}> 
                  X </button>
                <p>{item.name}</p>
            </li>
            );
        })}   
        </ul>
    </div>
  );
}

export default FavoritesList;