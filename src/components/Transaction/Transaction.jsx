import PropTypes from 'prop-types';
import {
  TranceCard,
  TransHead,
  TransHeadItem,
  TransRow,
  TransCell,
} from './Transaction.styled';

export const TransTable = ({ transes }) => {
  return (
    <TranceCard>
      <TransHead>
        <tr>
          <TransHeadItem>Type</TransHeadItem>
          <TransHeadItem>Amount</TransHeadItem>
          <TransHeadItem>Currency</TransHeadItem>
        </tr>
      </TransHead>

      <tbody>
        {transes.map((trans, i) => (
          <TransRow even={i % 2 === 0} key={trans.id}>
            <TransCell>{trans.type}</TransCell>
            <TransCell>{trans.amount}</TransCell>
            <TransCell>{trans.currency}</TransCell>
          </TransRow>
        ))}
      </tbody>
    </TranceCard>
  );
};

TransTable.protoTypes = {
  transes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
