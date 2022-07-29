import React, {useEffect, useState} from 'react';
import {getUser, getUserPosts, getUsers} from "../services/userService";
import {useStateContext} from "../context/ContexProvider";
import {Link, useParams} from "react-router-dom";
import {DataHero, PostCard, PostForm} from "../components";

/**
 * @description       Page que muestra todos los posts asociados a un usuario
 */
const Posts = () => {
	const {postsItems, setPostsItems, edit, setUserList, modalOpen, setModalOpen, currentPost} = useStateContext()
	const [userData, setUserData] = useState({})
	const {userId} = useParams()

	useEffect(() => {
		if (postsItems.length > 1) {
		}
		const fetchData = async () => {
			const res = await getUserPosts(userId)
			const user = await getUser(userId)
			const users = await getUsers(userId)
			setPostsItems(res)
			setUserData(user)
			setUserList(users)
		}
		fetchData().catch(console.error)
	}, [userId])

	return (
		<div className="flex flex-wrap justify-center gap-6">
			<div className="flex flex-wrap justify-center w-full mb-4">
				<h1 className="md:text-4xl text-2xl text-primary-content font-bold mt-4">Posts
					de <Link className="link-hover text-secondary" to={`/`}>{userData.name}</Link></h1>
			</div>
			<div className="flex flex-wrap justify-center w-full mb-4">
				<label data-testid="create-button" htmlFor="my-modal-3" className="btn btn-wide btn-primary" onClick={() => setModalOpen(true)}>Crear Post</label>
			</div>
			{postsItems.length === 0 && (
				<DataHero title={"post"}/>
			)
			}
			<div className="flex flex-wrap mx-auto gap-6 justify-center mb-10">
				{postsItems?.map((item) => (
					<PostCard post={item} key={item._id}/>
				))}
			</div>
			{modalOpen && (
				<>
					<input type="checkbox" id="my-modal-3" className="modal-toggle"/>
					<div className="modal">
						<div className="modal-box relative">
							<h3 className="text-2xl font-bold">{edit ? "Editar post" : "Crear post"}</h3>
							<p className="py-4 text-lg">{edit ? "Edita" : "Completa"} el siguiente formulario y guarda la información</p>
							<PostForm userId={userData._id} post={currentPost}/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Posts;
