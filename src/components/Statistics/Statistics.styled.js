import styled from 'styled-components';

export const Feedback = styled.div`
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.colorTextCommom};
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.red};
  text-align: center;
  margin-bottom: 8px;
`;
