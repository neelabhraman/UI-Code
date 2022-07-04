
import  {createStore} from 'redux';

const myReducer= (state={counter:0,showCount:true},action)=>{

    if(action.type==="increment"){
        return {counter:state.counter + 1,
            showCount:state.showCount};
    }else if(action.type==="decrement"){
        return {counter:state.counter -1 ,
            showCount:state.showCount};
    }else if(action.type==="increase"){
        return {counter:state.counter +action.value ,
            showCount:state.showCount};
    }else if(action.type==="toggle"){
        return {counter:state.counter  ,
            showCount: !state.showCount};
    }

    return state;
}

const store= createStore(myReducer);

export default store;











