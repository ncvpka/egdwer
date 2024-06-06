import React, { useState, useRef, useEffect } from "react";

const CounterUpHome = (end) => {
  const [state, setstate] = useState(null);
  const ref = useRef(0);
  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setstate(end);
      setstate(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, 50);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }

    return () => {
      isMounted = false;
    };
  }, [end]);
  return <div>{state}</div>;
};
export default CounterUpHome;
