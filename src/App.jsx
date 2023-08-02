import React, { lazy } from "react";
// import PostView from "./redux/features/posts/PostView";
const PostView = lazy(() => import("./redux/features/posts/PostView"));

const App = () => {
	return (
		<div>
			<PostView />
		</div>
	);
};

export default App;
