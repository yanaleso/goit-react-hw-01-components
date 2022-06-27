import PropTypes from 'prop-types';
import { Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <Status isOnline={isOnline}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;