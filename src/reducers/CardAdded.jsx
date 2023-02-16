const initialState = 0;
const CardAdded = (state = initialState, action) => {
  switch (action.type) {
    case "cardAdded":
      return state + 1;
    default:
      return state;
  }
};

export default CardAdded;
