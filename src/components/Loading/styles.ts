import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  h1 {
    margin-top: 2rem;
    color: var(--green);
  }
`;

export const LoadingImage = styled.img`
  animation: rotation 2s infinite linear;

  height: 300px;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
