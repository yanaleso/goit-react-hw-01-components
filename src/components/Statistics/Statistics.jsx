import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title, Item } from './Statistics.styled';

const Statistics = ( {title, stats} ) => {
  return (
    <Box width="m" mb={5} border="normal" borderColor="border" as="section">
      {title && <Title>{title}</Title>}

      <Box display="flex" as="ul">
        {stats.map(item => {
          return (<Item key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}</span>
          </Item>)
        })}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })),
}

export default Statistics;