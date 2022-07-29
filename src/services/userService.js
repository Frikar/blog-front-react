const apiUrl = process.env.REACT_APP_API_URL

export const getUser = async (id) => {
	const request = await fetch(`${apiUrl}/users/${id}`)
	return await request.json()
}

export const getUsers = async () => {
	const request = await fetch(`${apiUrl}/users/`)
	return await request.json()
}

export const getUserPosts = async (id) => {
	const request = await fetch(`${apiUrl}/users/${id}/posts`)
	return await request.json()
}
