const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIcecreams() {
  return {
    type: BUY_ICECREAMS,
    info: "Second Redux Action",
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICECREAMS:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial State", store.getState());
console.log("--------------");
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
const unsubscribeBothItems = store.subscribe(() => {
  console.log("Updated State of Cake", store.getState().cake.numOfCakes),
    console.log(
      "Updated State of IceCream",
      store.getState().icecream.numOfIcecreams
    );
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecreams());
store.dispatch(buyIcecreams());
unsubscribe();
unsubscribeBothItems();
// unsubscribeIceCream();
