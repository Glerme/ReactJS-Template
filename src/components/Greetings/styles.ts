import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
  height: 100vh;

  img {
    width: 250px;
    height: 250px;
    animation: ${rotate} 15s linear infinite;
  }
`;
