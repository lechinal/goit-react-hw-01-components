import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

function FriendListItem({ avatar, name }) {
  return (
    <Item className="item">
      <Status />
      <Avatar className="avatar" src={avatar} alt="User avatar" />
      <p className="name">{name}</p>
    </Item>
  );
}

export default FriendListItem;
