function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Hutang : Rp.{friend.balance} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Hutangnya : Rp.{friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>Lunas</p>}
      <button className="button" onClick={() => onSelectedFriend(friend)}>
        {isSelected ? 'Tutup' : 'Pilih'}
      </button>
    </li>
  );
}

export default Friend;
