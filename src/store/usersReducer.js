import { v4 as uuid} from 'uuid'

const initialState = {
    users: [
        {   
            id: '1',
            name: 'salis',
            email: 'salis@salis.org',
            gen: '1'
        },
        {   
            id: '2',
            name: 'ab',
            email: 'ab@ab.org',
            gen: '2'
        },
        {   
            id: '3',
            name: 'angie',
            email: 'angie@angie.org',
            gen: '3'
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = { id: uuid(), name: action.payload.name, email: action.payload.email, gen: action.payload.gen };
            return {...state, users: [...state.users, newUser]}
        // case "DELETE_USER":
        //     const filteredUsers = state.users.filter(user => user.id !== action.payload);
        //     return {...state, users:filteredUsers}
        // case "EDIT_USER":
        //     const editedUsers = state.users.map(user =>{
        //         if(user.id === action.id){
        //             return {...user, ...action.updatedInfo}
        //         } else {
        //             return user;
        //         }
        //     })
        //     return {...state, users: editedUsers}
        default:
            return state;
    }

}

export default usersReducer;