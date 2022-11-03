import { createActions } from 'reduxsauce';
import { ICharactersActionCreators } from '../../../global/interfaces/charecter';
import { Constants } from '../../../global/interfaces/redux';

export const { Types, Creators: CharactersActions } = createActions(
  {
    // Actions
    requestCharacters: ['search'],

    // Reducer
    setCharacters: ['characters'],
    changeLoading: ['loading'],
  },
  { prefix: '@CHARACTERS/' }
) as {
  Types: Constants<ICharactersActionCreators>;
  Creators: ICharactersActionCreators;
};
