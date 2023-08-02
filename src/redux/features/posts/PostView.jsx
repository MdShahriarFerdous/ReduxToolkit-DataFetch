import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsDataSlice";
import styles from "./PostView.module.css";

const PostView = () => {
	const { isLoading, posts, error } = useSelector((state) => {
		return state.posts;
	});

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return (
		<>
			<h1 className="h1 text-center my-4">Find Out My Blogs</h1>
			<div className="container px-4">
				<section className="row gx-5 gy-4 p-4">
					{isLoading && <h2>loading...</h2>}
					{error && <h2>{error}</h2>}
					{posts &&
						posts.map((post) => {
							const { id, title, body } = post;
							return (
								<article
									key={id}
									className="col-12 col-lg-6 col-md-12 p-4"
								>
									<div className={styles.contentdiv}>
										<h2>{title}</h2>
										<p className="pe-3 mt-4">{body}</p>
									</div>
								</article>
							);
						})}
				</section>
			</div>
		</>
	);
};

export default PostView;
