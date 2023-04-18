import { React, useContext } from 'react';
import { context } from './context/testContext';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

function Component() {
    const [user, handleSignIn] = useContext(context);

  return (
    <>
        {user.signedIn ? <ComponentThree /> : <ComponentTwo />}
    </>
  )
}

export default Component