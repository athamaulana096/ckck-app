import Friend from './Friend';

function FriendList({ friends, onSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} onSelectedFriend={onSelectedFriend} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}

export default FriendList;
