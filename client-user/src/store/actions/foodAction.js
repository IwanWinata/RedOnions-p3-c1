let url = "https://redonions12688.herokuapp.com/cust"

export const fetchSuccess = (payload) => {
  return {
    type: `fetch/food`,
    payload,
  };
};

export const searchSuccess = (payload) => {
  return {
    type: `search/food`,
    payload,
  };
};

export const changeLoading = (payload) => {
    return {
      type: `change/loading`,
      payload,
    };
  };

export const fetchFood = (limit) => {
  return function (dispatch) {
    fetch(url + `/foods?limit=${+limit}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response not Ok`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchSuccess(data))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(changeLoading(false))
      });
  };
};

export const searchFood = (id) => {
  return function (dispatch) {
    fetch(url + `/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response not Ok`);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(searchSuccess(data))
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      dispatch(changeLoading(false))
    });
  }
}