import { combineReducers } from 'redux';

import characters from './modules/characters/reducers';

const rootReducer = combineReducers({
  characters,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
