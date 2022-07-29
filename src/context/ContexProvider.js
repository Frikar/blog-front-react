import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const StateContext = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [postsItems, setPostsItems] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [edit, setEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState([]);

  /**
   * @description      Elimino del context el post basado en su id
   */
  const onDelete = (id) => {
    setPostsItems((items) => items.filter((item) => item._id !== id));
    toast.error("Post eliminado");
  };

  /**
   * @description      Limpio el context y cierro el modal
   */
  const formComplete = () => {
    setEdit(false);
    setCurrentPost({});
    setModalOpen(false);
  };

  /**
   * @description      Realizo el update del post en mi context
   */
  const onUpdate = (res) => {
    const updatedPost = postsItems.map((post) => {
      if (post._id === res._id) {
        return {
          ...post,
          title: res.title,
          body: res.body,
          userId: res.userId,
        };
      }
      return post;
    });
    setPostsItems(updatedPost);
    toast.success("Post actualizado");
  };
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
        formComplete,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext)
