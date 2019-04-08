import styled from 'styled-components';
import { tablet } from '../../styles/mediaQueries';

const HEIGHT = 48;

export const Header = styled.header`
  height: ${HEIGHT}px;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 0 0 black;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.text};
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${tablet} {
    max-width: 96%;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: ${props => props.theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
`;

export const Spacer = styled.div`
  height: ${HEIGHT}px;
`;
