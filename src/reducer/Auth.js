const initialState = {
  user: true,
  admin: false,
};
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "Logout":
      return {
        ...state,
        user: !state.user,
      };

    case "AdminOut":
      return {
        ...state,
        admin: !state.admin,
      };
    default:
      return state;
  }
};
export default Auth;

// if (action.type == "Logout") {
//   return { ...state, user: !state.user };
// } else if (action.type == "AdminOut") {
//   return { ...state, adminOut: !state.adminOut };
// }
//  else {
//   return state;
// }
