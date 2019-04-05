import styled from 'styled-components';

export const Item = styled.li`
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 14px 24px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.text};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
`;

export const Host = styled.span`
  color: ${props => props.theme.textSecondary};
  font-size: 12px;
`;

export const ExternalLink = styled.a`
  color: ${props => props.theme.text};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`;

export const CommentLink = styled.a`
  color: ${props => props.theme.textSecondary};

  &:visited {
    color: ${props => props.theme.textSecondary};
  }
`;
