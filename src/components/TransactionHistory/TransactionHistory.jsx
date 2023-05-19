import PropTypes from 'prop-types';
import TransactionHistoryModule from './TransactionHistory.module.css';

export const TransactionHistory = data => {
  const { items } = data;

  return (
    <>
      <table className={TransactionHistoryModule.transactionHistory}>
        <thead>
          <tr>
            <th className={TransactionHistoryModule.column}>Type</th>
            <th className={TransactionHistoryModule.column}>Amount</th>
            <th className={TransactionHistoryModule.column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr className={TransactionHistoryModule.line} key={item.id}>
              <td className={TransactionHistoryModule.value}>{item.type}</td>
              <td className={TransactionHistoryModule.value}>{item.amount}</td>
              <td className={TransactionHistoryModule.value}>
                {item.currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

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