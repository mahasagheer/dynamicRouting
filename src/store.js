import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/AuthSlice";
import UserReducer from "./features/auth/UserSlice";
import UserPostReducer from "./features/auth/UserPostSlice";
import CommentsReducer from "./features/auth/CommentSlice";
import FakeApiReducer from "./features/auth/FakeApiSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  auth: AuthReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
    post: UserPostReducer,
    comment: CommentsReducer,
    reducer: persistedReducer,
    fakeapi: FakeApiReducer,
  },
});
export default store;
// import { createStore } from "redux";
// import reducer from "./reducer/index";

// const store = createStore(reducer);
// export default store;
