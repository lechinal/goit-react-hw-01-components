import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const ListItem = styled.li`
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

const Name = styled.p`
  margin: 0;
`;

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem className={styles.item}>
      <Status className={styles.status} isOnline={isOnline} />
      <Avatar className={styles.avatar} src={avatar} alt="User avatar" />
      <Name className={styles.name}>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
