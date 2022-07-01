
import  {createStore} from 'redux';

const myReducer= (state={counter:0},action)=>{

    if(action.type==="increment"){
        return {counter:state.counter + 1};
    }else if(action.type==="decrement"){
        return {counter:state.counter -1 };
    }

    return state;
}

const store= createStore(myReducer);

export default store;











