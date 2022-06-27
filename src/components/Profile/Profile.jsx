import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Avatar, Name, UserInfo, Item, Quantity, Label } from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (<Box width="320px" mb={5} border="normal" borderColor="border" as="section">
        <Box display="flex" flexDirection="column" alignItems="center" py={5}>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <UserInfo>@{tag}</UserInfo>
            <UserInfo>{location}</UserInfo>
        </Box>

        <Box display="flex" as="ul">
            <Item>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </Item>
            <Item>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </Item>
            <Item>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </Item>
        </Box>
    </Box>);
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}

export default Profile;