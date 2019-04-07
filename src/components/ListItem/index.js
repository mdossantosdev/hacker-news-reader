import React from 'react';
import TimeAgo from 'react-timeago';
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const LINK_REL = 'nofollow noreferrer noopener';

const ListItem = ({ by, kids = [], score, url, title, id, type, time }) => {
  console.log({ by, kids, score, url, title, id, type, time });
  return (
    <Item>
      <ExternalLink
        href='https://gitconnected.com'
        rel={LINK_REL}
        target='_blank'
      >
        <Title>
          {title} <Host>(gitconnected.com)</Host>
        </Title>
      </ExternalLink>
      <Description>
        {score} points by{' '}
        <CommentLink
          href='#'
          rel={LINK_REL}
          target='_blank'
        >
          {by}
        </CommentLink>{' '}
        <TimeAgo date={new Date(time * 1000).toISOString()} /> {' | '}
        <CommentLink
          href='#'
          rel={LINK_REL}
          target='_blank'
        >
          {kids.length} Comments
        </CommentLink>
      </Description>
    </Item>
  )
};

export default ListItem;
