import React from 'react';
import {
  Header,
  Content,
  NavSection,
  Link,
  Icon,
  Title,
  Spacer,
} from './styles';
import { themes } from '../../store/app/utils';

const Nav = ({ theme, setTheme }) => {
  return (
    <div>
      <Header>
        <Content>
          <NavSection>
            <Link href='/'>
              <Icon>
                <i className='fab fa-hacker-news-square' style={{ color:'#FF6700' }}/>
              </Icon>
              <Title>Hacker News Reader</Title>
            </Link>
          </NavSection>
          <NavSection>
            {theme === themes.light ? (
              <Icon onClick={() => setTheme(themes.dark)}>
                <i className='fas fa-moon' />
              </Icon>
            ) : (
              <Icon onClick={() => setTheme(themes.light)}>
                <i className='fas fa-sun' />
              </Icon>
            )}
          </NavSection>
        </Content>
      </Header>
      <Spacer />
    </div>
  );
};

export default Nav;
