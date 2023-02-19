const initial=false;
const visibleadded = (state=initial,action) => {
  switch (action.type) {
    case "visible":
      return action.payload
    default:
      return state;
  }
};

export default visibleadded;