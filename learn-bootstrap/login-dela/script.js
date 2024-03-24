document.querySelector("button").onclick = login;
document.querySelectorAll("input").forEach((d) => {
    d.onkeyup = function (event) {
        if (event.key === "Enter") {
            document.querySelector("button").click();
        }
    };
});

function login() {
    const username = document.querySelector("input#username").value;
    const password = document.querySelector("input#password").value;

    if (username != "Username") return alert("Username salah!");
    if (password != "Password") return alert("Password salah!");
    alert("Login berhasil!");
    location.assign("https://erc-unri.vercel.app/");
}
