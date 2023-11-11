import styled from 'styled-components';

export const List = styled.li`
  background: ${({ theme }) => theme.color.backgroundButton};
  border: none;
  padding: 3px 10px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 12px;
  display: inline-block;
  transition: transform 250ms ease;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:active {
    transform: scale(0.9);
    box-shadow: inset 0 0 10px 0px ${({ theme }) => theme.color.shadeElem};
  }
`;
