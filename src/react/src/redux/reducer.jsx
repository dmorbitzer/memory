const reducer = (state, action) => {
  if (action.type === 'ADD_TOKEN') {
    return action.payload;
  }

  return state;
};

export default reducer;
