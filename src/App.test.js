import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup)


test('renders App component', async () => {

  render(<App />);

  await waitFor(() => expect(screen.getByText("bulbasaur")).toBeInTheDocument());
  expect(screen.getByText('Sort Alphabetically')).toBeInTheDocument();

});

test('favorites button adds item to favorites and removes item from favorites', async () => {

  const { getAllByTestId, queryAllByTestId } = render(<App />);

  await waitFor(() => expect(screen.getByText("bulbasaur")).toBeInTheDocument());

  fireEvent.click(getAllByTestId('favorite')[0], {bubbles: true});

  // check if favorites item now displays in the favorites container
  expect(queryAllByTestId('favorite-item').length).toBe(1);

  // check if favorites item is then removed by clicking X
  fireEvent.click(getAllByTestId('unfavorite')[0], {bubbles: true});

  expect(queryAllByTestId('favorite-item').length).toBe(0);

});

test('sort alphabetically', async () => {

  const { getAllByTestId } = render(<App />);

  await waitFor(() => expect(screen.getByText("bulbasaur")).toBeInTheDocument());
  expect(screen.getByText('Sort Alphabetically')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Sort Alphabetically'));

  expect(getAllByTestId('pokemon-name')[0]).toHaveTextContent('beedrill');

});


