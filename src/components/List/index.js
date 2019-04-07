import React from 'react';
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

export default List;
