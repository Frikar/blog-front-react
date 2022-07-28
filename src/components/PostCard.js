import React from 'react';
import {Link} from "react-router-dom";
import {deletePost} from "../services/postService";
import {useStateContext} from "../context/ContexProvider";

const PostCard = ({post}) => {
	const {setEdit, onDelete, setCurrentPost, setModalOpen} = useStateContext()
	const handleDelete = async (id) => {
		await deletePost(id)
		onDelete(id)
	}
	const handleUpdate = async (post) => {
		setEdit(true)
		setCurrentPost(post)
		setModalOpen(true)
	}
	return (
		<div data-testid="postListItem" className="card md:w-96 w-80 bg-base-200 shadow-xl">
			<figure>
				<img src="https://placeimg.com/400/225/arch" alt="Post"/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{post.title}</h2>
				<p className="truncate w-72">{post.body}</p>
				<div className="card-actions justify-center">
					<Link className="btn btn-primary" to={'post/' + post.id}>Leer post</Link>
					<label htmlFor="my-modal-3" data-testid={`postEdit-${post.id}`} className="btn btn-outline btn-secondary"
					        onClick={() => handleUpdate(post)}>Editar
					</label>
					<button data-testid={`postDelete-${post.id}`} className="btn btn-outline btn-accent"
					        onClick={() => handleDelete(post.id)}>Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
