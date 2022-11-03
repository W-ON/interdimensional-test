import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--background-color-card);
  padding: 1rem;
  border-radius: 12px;
  margin: 0.3rem;
  width: 600px;
  img {
    width: 150px;
  }
`;

export const Content = styled.div`
  margin-left: 1rem;
`;
export const NameText = styled.h1`
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const CharacteristicsText = styled.p`
  margin: 0.5rem 0;
`;
