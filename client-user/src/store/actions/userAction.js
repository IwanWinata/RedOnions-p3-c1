let url = "https://redonions12688.herokuapp.com/cust";

export const userLogin = (data) => {
  return function (dispatch) {
    return fetch(url + "/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal nih");
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const userRegister = (data) => {
  return function (dispatch) {
    return fetch(url + "/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        address: data.address,
      }),
    })
    .then((res) => {
        if(!res.ok){
            throw new Error ("Gagal nih")
        }
        return res.json()
    })
    .then(() => {

    })
    .catch(error => console.log(error))
  };
};
