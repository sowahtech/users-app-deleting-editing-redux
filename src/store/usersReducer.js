const initialState = {
    users: [
        {
            name: 'salis',
            email: 'salis@salis.org'
        },
        {
            name: 'ab',
            email: 'ab@ab.org'
        },
        {
            name: 'angie',
            email: 'angie@angie.org'
        },
        {
            name: 'tony',
            email: 'tony@tony.org'
        },
        {
            name: 'angie333',
            email: 'angie333@angie.org'
        },
        {
            name: 'tony568',
            email: 'tony568@tony.org'
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = { name: action.payload.name, email: action.payload.email };
            return {...state, users: [...state.users, newUser]}
        case "DELETE_USER":
            const filteredUsers = state.users.filter(user => user.name!==action.payload);
            return {...state, users:filteredUsers}
        default:
            return state;
    }

}

export default usersReducer;