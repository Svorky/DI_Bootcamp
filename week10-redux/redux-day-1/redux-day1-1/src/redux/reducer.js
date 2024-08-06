import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  count: 15,
  counta: 45,
};

export const counterReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };

    case DECREMENT:
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};
