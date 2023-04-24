import './App.css';
import { TestContext } from './context/testContext';
import { AuthContextProvider } from './context/firebaseAuth';
import Component from './Component';
import ComponentTwo from './ComponentTwo';

function App() {
  return (
    <>
      <AuthContextProvider>
        <TestContext>
          <Component />
        </TestContext>
      </AuthContextProvider>
    </>
  );
}

export default App;
