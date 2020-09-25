

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH':
            return {
                result: action.payload
            }
        case 'DELETE':
            const newState = { result: state.result.filter( el => el.id !== action.payload)};
            return newState
        case 'UPDATE':
            const index = state.result.findIndex((el) => el.id === action.payload.id);
            let givenArray = [...state.result];
            givenArray[index] = action.payload.updatedBuilder;
            return { result: givenArray};
        case 'ADD':
            return { result: [...state.result, action.payload]}
        default:
            return state
    }
}