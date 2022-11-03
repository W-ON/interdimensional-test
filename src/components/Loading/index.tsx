import * as S from './styles';
import rickPortalImg from '../../assets/rick-portal.png';

export function Loading() {
  return (
    <S.Container>
      <S.LoadingImage src={rickPortalImg}></S.LoadingImage>
      <h1>Loading</h1>
    </S.Container>
  );
}
