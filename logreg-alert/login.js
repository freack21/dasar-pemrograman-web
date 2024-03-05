const loginBtn = document.querySelector("#login-btn");
const kataSandi = document.querySelector("#kata-sandi");
const username = document.querySelector("#username");

loginBtn.onclick = () => {
    const form = document.forms["login-form"];
    let data = {};
    new FormData(form).forEach((val, key) => {
        data[key] = val;
    });
    accLogin(data);
};

const accLogin = (data) => {
    let accounts = localStorage.getItem("accounts");

    if (!accounts)
        return alert("Username is not registered! Please register first to create an account.");

    accounts = JSON.parse(accounts);
    let isExist = false,
        isWrong = true;
    accounts.forEach((d) => {
        if (d.username == data.username) {
            isExist = true;
            if (d["kata-sandi"] == data["kata-sandi"]) {
                isWrong = false;
            }
        }
    });

    if (!isExist)
        return alert("Username is not registered! Please register first to create an account.");

    if (!isWrong) return location.replace("https://freack21.github.io");

    alert("Wrong password! Please enter the correct password.");
};
