import React from 'react';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transcation => (
          <tr key={transcation.id}>
            <td>{transcation.type}</td>
            <td>{transcation.amount}</td>
            <td>{transcation.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
