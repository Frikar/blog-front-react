import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {getPost} from "../services/postService";
import {UserDetail} from "../components";


const PostDetail = () => {
	const [postData, setPostData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getPost(id)
			setPostData(res)
		}
		fetchData().catch(console.error)
	}, [id])

	if (!postData) return <div>Loading...</div>;

	return (
		<div className="bg-primary">
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-col">
					<img src="https://placeimg.com/1000/720/arch" alt={postData.title} className="max-w-xl w-full rounded-lg shadow-2xl"/>
					<div>
						<h1 className="md:text-5xl text-3xl text-white font-bold">{postData.title}</h1>
						<p className="py-6 text-2xl">{postData.body}</p>
					</div>
				</div>
			</div>
			<hr/>
			<UserDetail userId={postData.userId}/>
		</div>
	);
};

export default PostDetail;
