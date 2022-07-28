import React, {useEffect, useRef} from 'react';
import {useStateContext} from "../context/ContexProvider";
import {createPost, updatePost} from "../services/postService";
import toast from 'react-hot-toast';

const PostForm = ({userId, post}) => {
	const {postsItems, setPostsItems, edit, onUpdate, userList, formComplete} = useStateContext()
	const titleEl = useRef()
	const bodyEl = useRef()
	const userIdEl = useRef()

	useEffect( () => {
		if (edit) {
			handleUpdate(post).catch(console.error)
		}
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		const {value: title} = titleEl.current
		const {value: body} = bodyEl.current
		const {value: userId} = userIdEl.current

		const postObj = {title, body, userId};
		if (edit) {
			const res = await updatePost(postObj, post.id)
			onUpdate(res)
		} else {
			const res = await createPost(postObj)
			setPostsItems([...postsItems, {...res}])
			toast.success('Post creado');
		}
		clearInput()
	}

	const handleUpdate = async (post) => {
		titleEl.current.value = post.title
		bodyEl.current.value = post.body
		userIdEl.current.value = post.userId
	}

	const clearInput = () => {
		titleEl.current.value = ""
		bodyEl.current.value = ""
		userIdEl.current.value = 0
		formComplete()
	}

	return (
		<>
			<label htmlFor="my-modal-3" onClick={() => clearInput()}
			       className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
			<form method="POST" onSubmit={handleSubmit} id="myform">
				<div className="form-control">
					<label className="label">
						<span className="label-text">Titulo</span>
					</label>
					<input className="input input-bordered" ref={titleEl} name="title" required={true} type="text" placeholder="Titulo"/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Body</span>
					</label>
					<textarea className="textarea textarea-bordered h-36" ref={bodyEl} name="body" required={true} placeholder="Body"/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Usuario</span>
					</label>
					<select name="userId" ref={userIdEl} className="select select-bordered" defaultValue={userId}>
						<option value={0} disabled>Selecciona un usuario</option>
						{userList.map((user) => (
							<option value={user.id} key={user.id} disabled={userId !== user.id}>{user.name}</option>
						))}
					</select>
				</div>
				<div className="form-control mt-6 max-w-xl w-full">
					<input data-testid="submit-button" type="submit" value="Guardar" className="btn btn-primary"/>
				</div>
			</form>
		</>
	);
};

export default PostForm;
