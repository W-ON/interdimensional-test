import { createReducer } from 'reduxsauce';
import { ICharacterState } from '../../../global/interfaces/charecter';
import { Types } from './actions';

export const INITIAL_STATE: ICharacterState = {
  characters: [],
  loading: false,
};

const setCharacter = (
  state = INITIAL_STATE,
  { characters }: ICharacterState
) => {
  return { ...state, loading: false, characters: characters };
};

const changeLoading = (state = INITIAL_STATE, { loading }: ICharacterState) => {
  if (loading === undefined) {
    loading = !state.loading;
  }
  return { ...state, loading: loading };
};

export default createReducer<ICharacterState>(INITIAL_STATE, {
  [Types.SET_CHARACTERS]: setCharacter,
  [Types.REQUEST_CHARACTERS]: changeLoading,
  [Types.CHANGE_LOADING]: changeLoading,
});
