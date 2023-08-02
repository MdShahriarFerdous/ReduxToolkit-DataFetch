import { configureStore } from "@reduxjs/toolkit";
import postsDataReducer from "../features/posts/postsDataSlice";

const store = configureStore({
	reducer: {
		posts: postsDataReducer,
	},
});
export default store;
