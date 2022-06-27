import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Head, HeadName, Tr, Type } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Box width="l" as="table">
      <Head>
        <tr>
          <HeadName>Type</HeadName>
          <HeadName>Amount</HeadName>
          <HeadName>Currency</HeadName>
        </tr>
      </Head>

      <tbody>
        {items.map(item => {
          return (<Tr key={item.id}>
            <Type>{item.type}</Type>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </Tr>);
        })}   
      </tbody>
    </Box>
  );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
}

export default TransactionHistory;