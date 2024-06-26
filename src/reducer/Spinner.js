const initialState = true;
const Spinner = (state = initialState, action) => {
  switch (action.type) {
    case "spinner":
      return state;
    default:
      return state;
  }
};
export default Spinner;
