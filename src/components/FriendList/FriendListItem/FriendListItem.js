import React from 'react';
// import styled from 'styled-components';
// import PropTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

// const ListItem = styled.li`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const Status = styled.span`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background-color: ${props => (props.isOnline ? 'green' : 'red')};
//   margin-right: 10px;
// `;

// const Avatar = styled.img`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   margin-right: 10px;
// `;

// const Name = styled.p`
//   margin: 0;
// `;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      />
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
