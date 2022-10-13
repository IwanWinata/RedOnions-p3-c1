let url = "https://redonions12688.herokuapp.com/admin";
let access_token = localStorage.getItem("access_token")

export const postUser = (data) => {
  return function (dispatch) {
    return fetch(url + `/register`, {
      method: "post",
      headers: { "Content-Type": "application/json", access_token},
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        role: "admin",
        phoneNumber: data.phoneNumber,
        address: data.address,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Gagal nih`);
        }
        return res.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loginUser = (data) => {
  return function (dispatch) {
    return fetch(url + "/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Gagal nih`);
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token)
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

