import { React, useContext } from 'react';
import { context } from './context/testContext';

function ComponentTwo() {
    const user = useContext(context);
  return (
    <div>User Needs To Sign In</div>
  )
}

export default ComponentTwo