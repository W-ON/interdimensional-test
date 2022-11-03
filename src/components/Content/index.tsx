import { useSelector } from 'react-redux';
import { getCharactersState } from '../../store/modules/characters/selectors';
import { CardCharacter } from '../CardCharacter';
import { Loading } from '../Loading';
import * as S from './styles';

export function Content() {
  const { characters, loading } = useSelector(getCharactersState);

  return (
    <S.Container>
      {loading ? (
        <Loading></Loading>
      ) : (
        characters.length > 0 &&
        characters?.map((char) => <CardCharacter key={char.id} {...char} />)
      )}
    </S.Container>
  );
}
