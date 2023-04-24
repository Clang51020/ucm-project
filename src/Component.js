import { React, useContext } from 'react';
import { authContext } from './context/firebaseAuth';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

function Component() {
  const user = useContext(authContext);
  return (
    <div>
      <h1>Testing H1</h1>
      <h2>{user?.uid}</h2>
    </div>
  )
}

export default Component