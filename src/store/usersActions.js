  export const addUser = (users) => {
    return {
        type: 'ADD_USER',
        payload: users
    }
}

export const deleteUser = (name) => {
  return {
      type: 'DELETE_USER',
      payload: name
  }
}