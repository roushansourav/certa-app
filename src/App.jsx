import useCounter from './hooks/useCounter';

import { COUNTER_STATUS } from './constants/counterIdentifiers';

import './App.css';

function App() {
  const { count, counterStatus, handleCounter, resetCounter } = useCounter();

  const isCounterRunning = counterStatus === COUNTER_STATUS.RUNNING;
  const counterActionButtonText = isCounterRunning ? 'Pause' : 'Start';

  return (
    <>
      <h1>Certa Counter</h1>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={handleCounter}>{counterActionButtonText}</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
}

export default App;
