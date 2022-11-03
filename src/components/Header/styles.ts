import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 30%;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  border: 0;
  background-color: white;
  padding: 0.5rem 1rem;
  width: 100%;
  margin-top: 2rem;
  border-radius: 24px;

  img {
    border-style: none;
    width: 20px;
    height: 20px;
    border: 0;
    margin-right: 0.5rem;
  }
`;

export const DebouceInputCustom = styled(DebounceInput)`
  width: 100%;
  border: none;
`;
