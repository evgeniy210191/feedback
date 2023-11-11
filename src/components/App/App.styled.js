import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.color.backgroundCommen};
`;
