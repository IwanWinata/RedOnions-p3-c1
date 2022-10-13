let url = "https://redonions12688.herokuapp.com/admin"
let access_token = localStorage.getItem("access_token")

export const fetchSuccess = (payload) => {
    return {
      type: `fetch/food`,
      payload,
    };
  };

export const searchSuccess = (payload) => {
    return {
        type: `search/food`,
        payload
    } 
}

export const fetchFood = () => {
    return function (dispatch) {
        fetch(url + "/foods", {
          headers: {
            access_token
          }
        })
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
    }
}

export const detailFood = (id) => {
    return function (dispatch) {
        return fetch(url + `/${id}`, {
          headers: {
            access_token
          }
        })
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
    }
}

export const editFood = (data, foodId, ingredient) => {
  return function (dispatch) {
    return fetch(url + `/${foodId}`, {
      method: "put",
      headers: { "Content-Type": "application/json", access_token },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        price: +data.price,
        imgUrl: data.imgUrl,
        ingredients: ingredient.nameIngredient,
        AuthorId: 1,
        CategoryId: +data.CategoryId,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Gagal nih`);
        }
        return res.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const postFood = (data) => {
  return function (dispatch) {
    return fetch(url + `/food`, {
      method: "post",
      headers: { "Content-Type": "application/json", access_token },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        price: +data.price,
        imgUrl: data.imgUrl,
        ingredients: data.ingredients,
        CategoryId: +data.CategoryId,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Gagal nih`);
        }
        return res.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const destroyFood = (id) => {
  return function (dispatch) {
    return fetch(url + `/${id}`, {
      method: "delete",
      headers: {
        access_token
      }
    })
      .then((res) => {
        if(!res.ok){
            throw new Error("gagal nih")
        }
        return res.json()
    })
      .then((data) => {
      })
      .catch((err) => console.log(err));
  }
}