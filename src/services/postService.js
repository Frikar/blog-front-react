
const apiUrl = process.env.REACT_APP_API_URL

export const getPosts = async () => {
	const request = await fetch(`${apiUrl}/posts/`)
	return await request.json()
}

export const getPost = async (id) => {
	const request = await fetch(`${apiUrl}/posts/${id}`)
	return await request.json()
}

export const deletePost = async (id) => {
	await fetch(`${apiUrl}/posts/${id}`, {
		method: 'DELETE',
	});
}

export const createPost = async (obj) => {
	const request = await fetch(`${apiUrl}/posts/`, {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	return await request.json()
}

export const updatePost = async (obj, id) => {
	const request = await fetch(`${apiUrl}/posts/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(obj),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	return await request.json()
}
