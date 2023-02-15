const INITIAL_STATE = '';
const reducer = (state = INITIAL_STATE, action) => {
  if (action !== undefined && action.type === 'ADD_TOKEN') {
    return action.payload;
  }

  return state;
};

export default reducer;
