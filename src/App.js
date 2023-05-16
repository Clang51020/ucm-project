import './App.css';
import { useContext, useState } from 'react';
import { context } from './context/testContext';

function App() {
  const { usersList, setUsersList } = useContext(context);
  const [input, setInput] = useState('');

  const addUser = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      {usersList.map((user) => (
        <div>
          <h1 key={user.email}>{user.email}</h1>
          <h2>{user.mainOffice}</h2>
          <p>{user.role}</p>
        </div>
      ))}
      <input type='text' onChange={addUser}></input>
      <button onClick={setUsersList}>Add User</button>
    </div>
  );
}

export default App;