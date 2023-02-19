const initial=0;
const priceAdded = (state=initial,action) => {
  switch (action.type) {
    case "price":
      return parseInt(action.payload)
    default:
      return state;
  }
};

export default priceAdded;