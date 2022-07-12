import classes from './Counter.module.css';
import {INCREMENT,DECREMENT,INCREASE,TOGGLE} from "../store";
import {useSelector,useDispatch} from "react-redux";

const Counter = () => {
    const counter=useSelector(state => state.counter);
    const dispatch=useDispatch();
    const showCount=useSelector(state => state.showCount);
    const incrementCounterHandler = () => {
        dispatch({type:INCREMENT});
    };
    const increaseHandler = () => {
        dispatch({type:INCREASE,value:5});
    };
    const decrementCounterHandler = () => {
        dispatch({type:DECREMENT});
    };

    const toggleCounterHandler = () => {

        dispatch({type:TOGGLE});
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
