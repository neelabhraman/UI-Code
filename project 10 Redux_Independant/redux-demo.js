const redux = require ("redux");



const reducerFunc = (state={counter:0},action) =>{
if(action.type==='increment') {
    return {counter: state.counter + 1};
}
    if(action.type==='decrement') {
        return {counter: state.counter -1};
    }
return  state;
};

const store=redux.createStore(reducerFunc);
console.log("first",store.getState());
const mySubscriber=()=>{
    const latestState=store.getState();
    console.log("from Subscribe",latestState);
};

store.subscribe(mySubscriber);

store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});