export const getUser = async (id) => {
	const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	return await request.json()
}

export const getUsers = async () => {
	const request = await fetch(`https://jsonplaceholder.typicode.com/users`)
	return await request.json()
}

export const getUserPosts = async (id) => {
	const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
	return await request.json()
}
