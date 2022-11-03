import { ICharacterState } from '../../../global/interfaces/charecter';

import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducers';

const getCharactersState = (state: any): ICharacterState =>
  state?.characters || INITIAL_STATE;

const getCharacters = createSelector(
  [getCharactersState],
  (characters) => characters?.characters
);

export { getCharacters, getCharactersState };
