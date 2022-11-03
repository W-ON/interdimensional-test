import logoImg from '../../assets/logo.png';
import searchIconImg from '../../assets/search-icon.svg';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import { CharactersActions } from '../../store/modules/characters/actions';
import { useEffect, useState } from 'react';

export function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  dispatch(CharactersActions.requestCharacters('Rick'));

  useEffect(() => {
    dispatch(CharactersActions.requestCharacters(search));
  }, [search, dispatch]);

  return (
    <S.Container>
      <img src={logoImg} alt='logo rick and morty' />
      <S.ContainerInput>
        <img src={searchIconImg} alt='search icon' />
        <S.DebouceInputCustom
          minLength={2}
          placeholder='Procure um personagem'
          debounceTimeout={300}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        />
      </S.ContainerInput>
    </S.Container>
  );
}
