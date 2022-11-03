import { Action } from '@reduxjs/toolkit';

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: String;
}

export interface ICharacterState {
  characters: ICharacter[];
  loading: boolean;
}

export interface IRequestCharacters {
  search: string;
}

export type RequestCharactersAction = Action<'REQUEST_CHARACTERS'> &
  IRequestCharacters;
export type SetCharactersAction = Action<'SET_CHARACTERS'> & ICharacterState;
export type ChangeLoading = Action<'CHANGE_LOADING'> & ICharacterState;

export interface ICharactersActionCreators {
  requestCharacters: (search: string) => RequestCharactersAction;
  setCharacters: (characters: ICharacter[]) => SetCharactersAction;
  changeLoading: (loading: boolean) => ChangeLoading;
}
