import { useState, useCallback, useMemo } from "react";
import Title from "./component/Title";
import ShowCount from "./component/ShowCount";
import Button from "./component/Button";
import LayoutComponentOne from './component/LayoutComponentOne';
import LayoutComponentTow from './component/LayoutComponentTow';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 1000000000) i += 1;

    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="counter 1" />
      <Button handleClick={incrementByOne}>Increment By One</Button>

      <hr />
      {isEven ? "the number is even" : "the number is odd"}
      <hr />

      <ShowCount count={count2} title="counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
      <hr/>
      <LayoutComponentOne/>
      <LayoutComponentTow/>
    </div>
  );
}

export default App;
