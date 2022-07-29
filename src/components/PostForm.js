import React, {useEffect, useRef} from 'react';
import {useStateContext} from "../context/ContexProvider";
import {createPost, updatePost} from "../services/postService";
import toast from 'react-hot-toast';


/**
 * @description       Formulario de añadir y editar
 * @param post        Props con el post actual generado en la tarjeta
 * @param userId      Props con del usuario desde donde se crea o edita
 */
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

	/**
	 * @method handleSubmit
	 * @description Se encarga de enviar el formulario y luego llama a los metodos necesarios
	 */

	const handleSubmit = async (e) => {
		e.preventDefault()
		const {value: title} = titleEl.current
		const {value: body} = bodyEl.current
		const {value: userId} = userIdEl.current

		const postObj = {title, body, userId};
		if (edit) {
			const res = await updatePost(postObj, post._id)
			onUpdate(res)
		} else {
			const res = await createPost(postObj)
			setPostsItems([...postsItems, {...res}])
			toast.success('Post creado');
		}
		clearInput()
	}

	/**
	 * @method handleUpdate
	 * @description Cambia los valores de las referencias a los del post actual
	 */

	const handleUpdate = async (post) => {
		titleEl.current.value = post.title
		bodyEl.current.value = post.body
		userIdEl.current.value = post.userId
	}

	/**
	 * @method clearInput
	 * @description Limpia las referencias y los state del context modificados
	 */
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
					<select data-testid="selectUser" name="userId" ref={userIdEl} className="select select-bordered" defaultValue={userId}>
						<option value={0} disabled>Selecciona un usuario</option>
						{userList.map((user) => (
							<option value={user._id} key={user._id} disabled={userId !== user._id}>{user.name}</option>
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
