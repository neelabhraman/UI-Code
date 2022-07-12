import {createStore} from 'redux';

export const INCREMENT ='increment';
export const DECREMENT ='decrement';
export const INCREASE ='increase';
export const TOGGLE ='toggle';
const myReducer = (state = {counter: 0, showCount: true}, action) => {

    if (action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            showCount: state.showCount
        };
    } else if (action.type === DECREMENT) {
        return {
            counter: state.counter - 1,
            showCount: state.showCount
        };
    } else if (action.type === INCREASE) {
        return {
            counter: state.counter + action.value,
            showCount: state.showCount
        };
    } else if (action.type === TOGGLE) {
        return {
            counter: state.counter,
            showCount: !state.showCount
        };
    }

    return state;
}

const store = createStore(myReducer);

export default store;











