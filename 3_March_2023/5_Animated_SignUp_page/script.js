const container = document.querySelector(".container");
const signclick = document.querySelector(".signclick");
const loginclick = document.querySelector(".loginclick");

// console.table(container, signclick, loginclick)

loginclick.addEventListener("click", () => {
  container.classList.add("show");
});

signclick.addEventListener("click", () => {
  container.classList.remove("show");
});

const sign = document.querySelector(".signf");
const login = document.querySelector(".loginf");
// console.log(sign, login)

const err = (msg) => {
  Toastify({
    text: msg,
    className: "warning",
    position: "center",
    style: {
      background: "red",
      fontSize: "1.8rem",
    },
  }).showToast();
};

const emailerr = (email) => {
  let symbol = email.indexOf("@");

  let dot = email.indexOf(".");

  if (dot <= symbol + 3) {
    err("Email Not Valid");
    return false;
  }
  if (dot === email.lenght - 1) {
    err("Email Not Valid");
    return false;
  }

  return true;
};

const user = (username) => {
  if (username <= 4) {
    err("Username Contain Must be 4 Character");
    return false;
  }

  return true;
};

const passwd = (password) => {
  if (password <= 6) {
    err("Password Length Must Be 6");
    return false;
  }

  return true;
};

const success = (msg) => {
  Toastify({
    text: msg,
    className: "warning",
    position: "center",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "1.8rem",
    },
  }).showToast();
};

sign.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new FormData(sign);
  let Username = data.get("username");
  let Email = data.get("email");
  let Password = data.get("Password");

  let EmailElement = sign.elements[1];
  console.log();

  if (
    localStorage.getItem(Email) === null &&
    emailerr(Email) &&
    user(Username.length) &&
    passwd(Password.length)
  ) {
    localStorage.setItem(
      Email,
      JSON.stringify({ username: Username, password: Password })
    );
    success("Regester Successful");
    setTimeout(() => {
      loginclick.click();
    }, 200);
    sign.reset();
  } else {
    //alert("Already Register by This Email")
  }
});

login.addEventListener("submit", (e) => {
  e.preventDefault();
  // //alert(' llsubmit')

  let data = new FormData(login);
  let email = data.get("email");
  let input_passwod = data.get("Password");

  if (localStorage.getItem(email)) {
    let Mydata = JSON.parse(localStorage.getItem(email));
    let getPassword = Mydata.password;

    if (input_passwod === getPassword) {
      success("Login Successful");
      //alert("Login Succeffully")
      login.reset();
      location.href = "./success.html";
    } else {
      success("Password Is Wrong");
    }
  } else {
    err("Invalid User");
  }
});
