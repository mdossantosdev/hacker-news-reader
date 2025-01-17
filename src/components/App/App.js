import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { themes } from '../../store/app/utils';
import { colorsLight, colorsDark } from '../../styles/palette';
import { Wrapper } from './styles';

import Nav from '../Nav';
import List from '../List';
import Loader from '../Loader';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate = prevProps => {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor = () => {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  }

  render() {
    const { theme, stories, hasMoreStories } = this.props;

    return (
      <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
        <div>
          <Nav />
          <Wrapper>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{ height: '100%', overflow: 'visible' }}
            >
              <List stories={stories} />
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  storyIds: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasMoreStories: PropTypes.bool.isRequired,
  fetchStories: PropTypes.func.isRequired,
  fetchStoriesFirstPage: PropTypes.func.isRequired,
};

export default App;
