import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transcation => (
          <tr key={transcation.id} className={styles.element}>
            <td className={styles.item}>{transcation.type}</td>
            <td className={styles.item}>{transcation.amount}</td>
            <td className={styles.item}>{transcation.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
