// action type
const CHANGE_NAME = "myself/CHANGE_NAME";

// initial state
const initial_state = { name: "kidongg", age: 28 };

// action creator
export const changeName = (name) => {
  return { type: CHANGE_NAME, name: name };
};

//reducer
export default function myselfReducer(state = initial_state, action = {}) {
  switch (action.type) {
    case "myself/CHANGE_NAME": {
      return { ...state, name: action.name };
    }
    default:
      return state;
  }
}
