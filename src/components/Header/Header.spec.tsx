import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Header } from '.';
import * as redux from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('Header renders correctly', () => {
  it('render the input of the Header', async () => {
    render(<Header />);
    expect(
      screen.getByPlaceholderText(/Procure um personagem/)
    ).toBeInTheDocument();
  });
});
