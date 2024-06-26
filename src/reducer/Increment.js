const initialState = 10;
const Increment = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};
export default Increment;
