const initialState = {
    users: []
};

const updateUser = (state, updatedUserData, userId) => {
    return state.users.map(user =>
        user.id === userId ? { ...user, ...updatedUserData } : user);
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE':
            return { ...state, users: [...state.users, action.payload] };

        case 'DELETE':
            let arr = state.users;
            let index = arr.findIndex(user => user.id === action.payload);
            if (index >= 0) {
                arr.splice(index, 1);
                return { ...state, users: [...arr] };
            }
            return state;

        case 'UPDATE':
            let arr2 = state.users;
            let index2 = arr2.findIndex(user => user.id === action.payload.id);
            if (index2 >= 0) {
                arr2[index2] = { ...action.payload }
                return state = { ...state, users: [...arr2] };
            }
            return state;

        default:
            return state;
    }
};

export default rootReducer;
