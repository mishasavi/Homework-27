const BASE_URL = "https://webaccounting.herokuapp.com";

loginUser.onclick = e => {

    const code = btoa (`${login.value}:${password.value}`);
    fetch (`${BASE_URL}/account/login`, {
        method: 'Post',
        headers: {
           Authorization: `Basic ${code}`
        }

    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));
}
