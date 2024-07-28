import { useRef, useState } from "react";

import {
  COUNTER_STATUS,
  INITIAL_COUNTER_VALUE,
} from "../constants/counterIdentifiers";

const useCounter = () => {
  const timer = useRef(null);
  const [count, setCount] = useState(INITIAL_COUNTER_VALUE);
  const [counterStatus, setCounterStatus] = useState(COUNTER_STATUS.STOPPED);

  const handleCounter = () => {
    if (counterStatus === COUNTER_STATUS.RUNNING) {
      pauseCounter();
    } else {
      startCounter();
    }
  };

  const clearTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };
  const startCounter = () => {
    clearTimer();
    timer.current = setInterval(() => setCount((count) => count + 1), 1000);
    setCounterStatus(COUNTER_STATUS.RUNNING);
  };

  const pauseCounter = () => {
    clearTimer();
    setCounterStatus(COUNTER_STATUS.PAUSED);
  };

  const resetCounter = () => {
      clearTimer();
      setCount(INITIAL_COUNTER_VALUE);
      setCounterStatus(COUNTER_STATUS.STOPPED);
  };
  return {
    count,
    counterStatus,
    handleCounter,
    resetCounter,
  };
};

export default useCounter;
