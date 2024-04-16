const BASE_URL = "https://webaccounting.herokuapp.com";
update.onclick = e => {
    const user = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        login: login.value.trim(),
        password: password.value
    }
    const code = btoa (`${login.value}:${password.value}`);
    fetch (`${BASE_URL}/account/user`, {
        method: 'Put',
        body: JSON.stringify(user),
        headers: {
            Authorization: `Basic ${code}`,
            "Content-type": 'application/json'
        }

    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));
}