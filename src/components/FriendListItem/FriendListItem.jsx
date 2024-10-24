import s from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClass = isOnline ? s.online : s.offline;

    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={`${s.status} ${statusClass}`}>
                {isOnline ? 'online' : 'offline'}
            </p>
        </div>
    );
};

export default FriendListItem;
