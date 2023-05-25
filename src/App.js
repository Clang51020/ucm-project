import './App.css';
import { useContext } from 'react';
import { context } from './context/testContext';

function App() {
  const { usersList, getData } = useContext(context);

  usersList.forEach((user) => {
    console.log(user.id)
  })

  return (
    <div>
      {usersList.map((user) => (
        <div key={user.id}>
          <h1>{user.data.Email}</h1>
        </div>
      ))}
      <button onClick={getData}>Get User Data</button>
    </div>
  );
}

export default App;