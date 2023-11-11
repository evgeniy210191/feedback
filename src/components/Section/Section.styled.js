import styled from 'styled-components';
export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.red};
  text-align: center;
  margin-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
