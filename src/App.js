import './App.css';
import { TestContext } from './context/testContext';
import Component from './Component';
import ComponentTwo from './ComponentTwo';

function App() {
  return (
    <>
      <TestContext>
        <Component />
      </TestContext>
    </>
  );
}

export default App;
