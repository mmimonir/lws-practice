const Redux = window.Redux;
// select dom elements
const counterEl = document.querySelector(".lws-singleResult");
const incrementElForm = document.querySelector(".incrementForm");
const decrementElForm = document.querySelector(".decrementForm");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

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

// initial state
const initialState = {
  value: 120,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
  //   incrementEl.value = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// incrementElForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(incrementElForm);
//   const incrementValue = parseInt(formData.get("increment"));
//   store.dispatch(increment(incrementValue));
// });

// select all increment form

// incrementElForm.forEach((form) => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const incrementValue = parseInt(formData.get("increment"));
//     store.dispatch(increment(incrementValue));
//   });
// });

// decrementElForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(decrementElForm);
//   const decrementValue = parseInt(formData.get("decrement"));
//   store.dispatch(decrement(decrementValue));
// });
