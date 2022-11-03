import { render, screen } from '@testing-library/react';
import { Content } from '.';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

const mockedCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('Content renders correctly', () => {
  it('render the loading of the content', () => {
    const useSelectorMocked = jest.mocked(useSelector);

    useSelectorMocked.mockReturnValue({
      loading: true,
      characters: [],
    });
    render(<Content />);

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('render the characters of the content', () => {
    const useSelectorMocked = jest.mocked(useSelector);

    useSelectorMocked.mockReturnValue({
      loading: false,
      characters: [mockedCharacter],
    });
    render(<Content />);

    expect(screen.getByText(mockedCharacter.name)).toBeInTheDocument();
  });
});
