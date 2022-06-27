import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Box } from '../Box';
import { Item } from './FriendList.styled';


const FriendList = ({ friends }) => {
    return (
        <Box width="m" display="flex" flexDirection="column" mb={5} as="ul">
            {friends.map(friend => {
                return (<Item key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />
                </Item>);
            })}
        </Box>
);
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}

export default FriendList;