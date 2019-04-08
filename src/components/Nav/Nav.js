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

const Nav = () => {
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
        </Content>
      </Header>
      <Spacer />
    </div>
  );
};

export default Nav;
