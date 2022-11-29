const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS";
const RESTOCKED_CAKE = "RESTOCKED_CAKE";
const RESTOCKED_ICECREAM = "RESTOCKED_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function restockCake() {
  return {
    type: RESTOCKED_CAKE,
  };
}

function buyIcecreams() {
  return {
    type: BUY_ICECREAMS,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: RESTOCKED_ICECREAM,
    payload: qty,
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
    case RESTOCKED_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
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
    case RESTOCKED_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    case BUY_CAKE:
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
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
console.log("--------------");
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
const unsubscribeBothItems = store.subscribe(() => {
  // console.log("Updated State of Cake", store.getState().cake.numOfCakes),
  //   console.log(
  //     "Updated State of IceCream",
  //     store.getState().icecream.numOfIcecreams
  //   );
});

store.dispatch(buyCake());
store.dispatch(buyIcecreams());
store.dispatch(buyCake());
store.dispatch(buyIcecreams());
store.dispatch(restockCake());
store.dispatch(restockIceCream(5));

unsubscribe();
// unsubscribeBothItems();
// unsubscribeIceCream();
