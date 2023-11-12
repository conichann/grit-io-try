
import React, { useState, useEffect, useCallback } from 'react';

type Props = {};

type State = {
  count: number;
};

export const Main = () => {


    const [count, setCount] = useState(0);
    const [count, setCount] = useState();

    useEffect(() => {
    setCount(count + 1);
  }, [count]);
    const handleClickHandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);

    return (
      <div>
        <h2>count: {count}</h2>
        <button onClick={handleClickHandler}>increment</button>
      </div>
    ); 
};



