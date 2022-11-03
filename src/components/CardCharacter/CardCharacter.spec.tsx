import { render, screen } from '@testing-library/react';
import { CardCharacter } from '.';

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

describe('Card Character renders correctly', () => {
  it('render name of the character', () => {
    render(<CardCharacter {...mockedCharacter}></CardCharacter>);
    expect(screen.getByText(mockedCharacter.name)).toBeInTheDocument();
  });

  it('render status of the character', () => {
    render(<CardCharacter {...mockedCharacter}></CardCharacter>);
    expect(
      screen.getByText(new RegExp(mockedCharacter.status))
    ).toBeInTheDocument();
  });

  it('render species of the character', () => {
    render(<CardCharacter {...mockedCharacter}></CardCharacter>);
    expect(
      screen.getByText(new RegExp(mockedCharacter.species))
    ).toBeInTheDocument();
  });

  it('render gender of the character', () => {
    render(<CardCharacter {...mockedCharacter}></CardCharacter>);
    expect(
      screen.getByText(new RegExp(mockedCharacter.gender))
    ).toBeInTheDocument();
  });
});
