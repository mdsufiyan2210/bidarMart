const initial=0;
const numberItems = (state=initial,action) => {
  switch (action.type) {
    case "NumberOfItem":
      return parseInt(action.payload);
    default:
      return state;
  }
};

export default numberItems;
