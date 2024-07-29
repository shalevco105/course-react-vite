
const initialState = {
    images: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_IMAGES':
            return { ...state, images: [...action.payload] };

        default:
            return state;
    }
};

export default rootReducer;
