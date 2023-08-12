import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import FriendListItem from './components/FriendListItem';
import TransactionHistory from './components/TransactionHistory';

import user from '../data/user.json';
// import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList />
      <FriendListItem />
      <TransactionHistory />
    </div>
  );
};
