const initialState = {
    foods: [],
    food: {},
    loading: true
}

export default function foodReducer(state = initialState, action) {
    switch (action.type) {
        case "fetch/food":
            return {
                ...state,
                foods: action.payload
            };
        case "change/loading":
            return {
                ...state,
                loading: action.payload
            };
        
        case "search/food":
            return {
                ...state,
                food: action.payload
            }

        default:
            return state;
    }
}