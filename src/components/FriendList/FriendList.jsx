import PropTypes from "prop-types"
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <span className={css.status}  style={{      
              backgroundColor: friend.isOnline ? "#4caf50" : "#f81010",
}}>{friend.isOnline}</span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
            </li>
            ))}
        </ul>
    );
};

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}