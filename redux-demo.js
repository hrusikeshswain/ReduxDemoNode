const redux = require("redux");

//reducer function which accepts old state of data and action to perform
const counter = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decreament") {
    return {
      counter: state.counter - 1,
    };
  }
};

//central data store
const store = redux.createStore(counter);

console.log(store.getState());

// subscriber needed to get the latest dtat by subscriber components
const countSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// lets subscribe
store.subscribe(countSubscriber);

//actions
const actionIncreament = { type: "increament" };
const actionDecreament = { type: "decreament" };

store.dispatch(actionIncreament);
store.dispatch(actionDecreament);
