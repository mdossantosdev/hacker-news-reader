import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './styles';
import ListItem from '../ListItem';

const List = ({ stories }) => (
  <ListWrapper>
    {stories.map(story => (
      story
        ? <ListItem key={story.id} {...story} />
        : null
    ))}
  </ListWrapper>
);

List.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default List;
