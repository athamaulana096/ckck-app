import { useState } from 'react';

export default function SplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState('');
  const [myBill, setMyBill] = useState('');
  const [whoIsPay, setWhoIsPay] = useState('');

  const friendBill = amount ? amount - myBill : '';

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPay === 'user' ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>CK-CK nya sama {selectedFriend.name}</h2>
      <label htmlFor="">Total Bayar</label>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <label htmlFor="">Duit Awak</label>
      <input type="text" value={myBill} onChange={(e) => setMyBill(e.target.value)} />
      <label htmlFor="">Uang {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />
      <label htmlFor="">Dibandarin sama</label>
      <select value={whoIsPay} onChange={(e) => setWhoIsPay(e.target.value)}>
        <option value="user">Awak</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Tambah</button>
    </form>
  );
}
