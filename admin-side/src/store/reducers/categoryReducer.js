const initialState = {
  categories: [],
  category: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch/category":
      return {
        ...state,
        categories: action.payload,
      };

    case "search/category":
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
