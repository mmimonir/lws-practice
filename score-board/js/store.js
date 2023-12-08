const Redux = window.Redux;
// select dom elements
const counterEl = document.querySelector(".lws-singleResult");
const incrementElForm = document.querySelector(".incrementForm");
const decrementElForm = document.querySelector(".decrementForm");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

export const reset = () => {
  return {
    type: RESET,
    payload: 120,
  };
};

// initial state
const initialState = {
  value: 120,
};
export const resetValue = initialState;
// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    if (action.payload >= state.value) {
      return {
        ...state,
        value: 0,
      };
    } else {
      return {
        ...state,
        value: state.value - action.payload,
      };
    }
  } else if (action.type === RESET) {
    return {
      ...state,
      value: action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);
export const mainStore = store;

const render = () => {
  const singleResult = document.querySelector(".lws-singleResult");
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// select all dynamicaly added increment form and add event listener
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.matches(".incrementForm")) {
    const formData = new FormData(target);
    const incrementValue = parseInt(formData.get("increment"));
    store.dispatch(increment(incrementValue));
  } else if (target.matches(".decrementForm")) {
    const formData = new FormData(target);
    const decrementValue = parseInt(formData.get("decrement"));
    store.dispatch(decrement(decrementValue));
  }
});

export default { render, resetValue, mainStore, reset, increment, decrement };
