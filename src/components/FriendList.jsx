import Friend from './Friend';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} />
      ))}
    </ul>
  );
}

export default FriendList;
