import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  height: 90vh;
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#f1f1f1')};
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
`;
