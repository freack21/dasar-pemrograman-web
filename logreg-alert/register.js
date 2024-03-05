const submitBtn = document.querySelector("#submit-btn");
const noHp = document.querySelector("#no-hp");
const kataSandi = document.querySelector("#kata-sandi");

noHp.oninput = () => {
    if (!/^[0-9]$/i.test(noHp.value[noHp.value.length - 1])) {
        noHp.value = noHp.value.substr(0, noHp.value.length - 1);
    }
};

submitBtn.onclick = () => {
    const inputs = document.querySelectorAll("input");
    const selects = document.querySelectorAll("select");
    const allInput = [...inputs, ...selects];
    let isValid = true;

    allInput.forEach((d) => {
        const warnText = document.querySelector(`#${d.id}-warn`);
        const setError = (msg) => {
            isValid = false;
            d.style.borderBottom = "2px solid #E53E3E";
            if (warnText) {
                warnText.textContent = msg;
                warnText.style.color = "#E53E3E";
            }
        };
        const setVerified = (msg) => {
            d.style.borderBottom = "2px solid #04AA6D";
            if (warnText) {
                warnText.textContent = msg || "Verified!";
                warnText.style.color = "#04AA6D";
            }
        };

        if (d.required && !d.value) {
            setError("Please fill in this input!");
        } else {
            setVerified();
        }

        if (d.id == "re-kata-sandi" && d.value && d.value != kataSandi.value) {
            setError("The password must be the same!");
        }

        if (d.id == "kata-sandi" && d.value && d.value.length < 8) {
            setError("The length of the password must be 8-20 characters.");
        }

        if (d.type == "email" && d.value) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(d.value)) {
                setError("Please fill in a valid email!");
            }
        }
    });

    if (isValid) {
        const form = document.forms["regist-form"];
        let data = {};
        new FormData(form).forEach((val, key) => {
            data[key] = val;
        });
        saveAcc(data);

        alert("Successfully register! Please login.");
        location.replace("login.html");
    }
};

const saveAcc = (data) => {
    let accounts = localStorage.getItem("accounts");

    if (!accounts) return localStorage.setItem("accounts", JSON.stringify([data]));

    accounts = JSON.parse(accounts);
    accounts.push(data);
    localStorage.setItem("accounts", JSON.stringify(accounts));
};
