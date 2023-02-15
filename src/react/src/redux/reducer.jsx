const INITIAL_STATE = { authToken: null };
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return { ...state, authToken: action.payload };
    default:
      return state;
  }
};

export default reducer;
