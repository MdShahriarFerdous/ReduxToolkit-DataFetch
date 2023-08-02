import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPostData", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	return response.data;
	// fetch("https://jsonplaceholder.typicode.com/posts")
	// 	.then((res) => res.json())
	// 	.then((data) => console.log(data));
});

const postsDataSlice = createSlice({
	name: "posts",
	initialState: {
		isLoading: false,
		posts: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
			state.error = null;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.isLoading = false;
			state.posts = [];
			state.error = action.error.message;
		});
	},
});
export default postsDataSlice.reducer;
