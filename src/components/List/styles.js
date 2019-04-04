import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundScondary};
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;
