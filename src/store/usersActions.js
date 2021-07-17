export const addUser = (newUser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore(-+9)
      .collection("users")
      .add(newUser)
      .then((doc) => {
		dispatch({
			type: 'ADD_USER',
			payload: newUser
		})
      });
  };

};

export const deleteUser = (user_id) => {
  return {
      type: 'DELETE_USER',
      payload: user_id
  }
}

export const editUser = (id, updatedInfo) => {
  return {
      type: 'EDIT_USER',
      id: id,
      updatedInfo: updatedInfo
  }
}
