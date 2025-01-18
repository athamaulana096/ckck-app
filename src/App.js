import { useState } from 'react';
import AddFriends from './components/Forms/AddFriends';
import SplitBill from './components/Forms/SplitBill';
import FriendList from './components/FriendList';

const initialFriends = [
  {
    id: 118836,
    name: 'Budi',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sukma',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Parjo',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriends() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) => (selected?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />
        {showAddFriend && <AddFriends onAddFriend={handleAddFriend} />}
        <button className="button" onClick={handleShowAddFriends}>
          {showAddFriend ? 'Tutu[' : 'Tambah Kawan'}
        </button>
      </div>
      {selectedFriend && <SplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
