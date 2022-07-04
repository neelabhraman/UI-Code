import classes from './Counter.module.css';

import {useSelector,useDispatch} from "react-redux";

const Counter = () => {
    const counter=useSelector(state => state.counter);
    const dispatch=useDispatch();
    const showCount=useSelector(state => state.showCount);
    const incrementCounterHandler = () => {
        dispatch({type:"increment"});
    };
    const increaseHandler = () => {
        dispatch({type:"increase",value:5});
    };
    const decrementCounterHandler = () => {
        dispatch({type:"decrement"});
    };

    const toggleCounterHandler = () => {

        dispatch({type:"toggle"});
    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {showCount && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementCounterHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementCounterHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
