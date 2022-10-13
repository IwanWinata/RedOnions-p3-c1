const url = "https://redonions12688.herokuapp.com/admin"
let access_token = localStorage.getItem("access_token")

export const fetchSuccess = (payload) => {
    return {
        type: `fetch/category`,
        payload
    }
}

export const searchSuccess = (payload) => {
  return {
      type: `search/category`,
      payload
  }
}

export const fetchCategory = () => {
    return function (dispatch) {
        fetch(url + "/categories", {
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

export const searchCategory = (id) => {
  return function (dispatch) {
      fetch(url + `/category/${id}`, {
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

export const postCategory = (data) => {
  return function (dispatch){
    return fetch( url + `/categories`, {
          method: "post",
          headers: { "Content-Type": "application/json", access_token },
          body: JSON.stringify({
            name: data.name,
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

export const destroyCategory = (id) => {
  return function (dispatch) {
    return fetch(url + `/category/${id}`, {
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

export const editCategory = (data, id) => {
  return function (dispatch) {
    return fetch(url + `/category/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json", access_token},
      body: JSON.stringify({
        name: data.name
      })
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