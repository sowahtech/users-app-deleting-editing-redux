  export const addUser = (newUser) => {
    return {
        type: 'ADD_USER',
        payload: newUser
    }
}

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
