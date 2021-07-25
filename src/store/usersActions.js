// import { getFirestore } from "redux-firestore";

export const addUser = (newUser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add({...newUser, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then((doc) => {});
  };
};

export const deleteUser = (user_id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(user_id)
      .delete()
      .then(() => {});
  };
};

export const editUser = (id, updatedInfo) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
		  .collection("users")
		  .doc(id)
		  .set(updatedInfo).then(() => {
        
      })
  };
 
};

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
	    .orderBy("name", "asc")
      .onSnapshot(
        (snapshot) => {
          let users = [];
          snapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
          });
          console.log(users);
          dispatch({
            type: "SET_ALL_USERS",
            payload: users,
          });
        },

        (err) => {}
      );
  };
};
