
export const getPosts = async () => {
	const request = await fetch('https://jsonplaceholder.typicode.com/posts')
	return await request.json()
}

export const getPost = async (id) => {
	const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	return await request.json()
}

export const deletePost = async (id) => {
	await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'DELETE',
	});
}

export const createPost = async (obj) => {
	const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	return await request.json()
}

export const updatePost = async (obj, id) => {
	const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(obj),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	return await request.json()
}
