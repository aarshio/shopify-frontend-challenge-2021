const initialState = {
  isLaoding: false,
  nominations: [],
  results: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  if (action.type === "SET_RESULTS") {
    return { ...state, isLoading: false, results: action.payload };
  }

  if (action.type === "SET_NOMINATIONS") {
    return { ...state, isLoading: false, nominations: action.payload };
  }
  return state;
}
