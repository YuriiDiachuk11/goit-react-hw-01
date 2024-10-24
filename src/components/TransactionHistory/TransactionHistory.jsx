import s from "./TransactionHistory.module.css"
const TransactionHistory = ({ items }) => {
    return (
      <table className={s.transactionHistory}>
        <thead>
          <tr className={s["tr-item"]}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={s["td-item"]}>{type}</td>
              <td className={s["td-item"]}>{amount}</td>
              <td className={s["td-item"]}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default TransactionHistory;