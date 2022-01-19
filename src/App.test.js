import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import PokemonList from './components/PokemonList';

afterEach(cleanup)


test('renders App component', () => {
  render(<App />);
  expect(screen.getByText('Sort Alphabetically')).toBeInTheDocument();
});

test('renders PokemonList component with dummy data', () => {
  const fakePokemon = [
    {
      favorited: false,
      name: "Pikachu",
      url: "https://www.test.com/pokemon"
    },
    {
      favorited: false,
      name: "PokemonTwo",
      url: "https://www.test.com/pokemontwo"
    }
];

  render(<PokemonList list={fakePokemon} />);
  const listItems = doc.queryAllByTestId('pokemon-card');
  expect(getByTestId('pokemon-list')).not.toHaveAttribute('disabled')

  screen.debug();
  expect(screen.getByText('Sort Alphabetically')).toBeInTheDocument();
});


