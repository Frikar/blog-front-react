import React, {createContext, useContext, useState} from "react";
import toast from 'react-hot-toast';

const StateContext = createContext(undefined);

export const ContextProvider = ({children}) => {
	const [postsItems, setPostsItems] = useState([])
	const [currentPost, setCurrentPost] = useState({})
	const [edit, setEdit] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const [userList, setUserList] = useState([])
	const onDelete = (id) => {
		setPostsItems((items) => items.filter((item, index) => item.id !== id));
		toast.error('Post eliminado');
	}

	const formComplete = () => {
		setEdit(false)
		setCurrentPost({})
		setModalOpen(false)
	}

	const onUpdate = (res) => {
		setCurrentPost(res)
		const updatedPost = postsItems.map((post) => {
			if (post.id === res.id) {
				return {
					...post,
					title: res.title,
					body: res.body,
					userId: res.userId
				}
			}
			return post
		})
		setPostsItems(updatedPost)
		toast.success('Post actualizado');
	}
	return (
		<StateContext.Provider
			value={{
				postsItems,
				setPostsItems,
				edit,
				setEdit,
				onDelete,
				onUpdate,
				userList,
				setUserList,
				setModalOpen,
				modalOpen,
				setCurrentPost,
				currentPost,
				formComplete
			}}
		>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
