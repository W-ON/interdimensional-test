import { ICharacter } from '../../global/interfaces/charecter';
import * as S from './styles';

export function CardCharacter({
  image,
  name,
  gender,
  status,
  species,
}: ICharacter) {
  return (
    <S.Container>
      <img src={image} alt='logo' />
      <S.Content>
        <S.NameText>{name}</S.NameText>
        <S.CharacteristicsText>Gender: {gender}</S.CharacteristicsText>
        <S.CharacteristicsText>Status:Alive</S.CharacteristicsText>
        <S.CharacteristicsText>Species: {species}</S.CharacteristicsText>
      </S.Content>
    </S.Container>
  );
}
