const BASE_URL = "https://webaccounting.herokuapp.com";

newPass.onclick = () => {
    try {
    const code = btoa (`${login.value}:${password.value}`);
    if (newPassword.value !== newPasswordRepeated.value) throw new Error ("Error: the new passwords do not match");
    if (newPassword.value === password.value) throw new Error ("Error: the new password must differ from the old one!");
    fetch (`${BASE_URL}/account/user/password`, {
        method: 'Put',
        headers: {
            Authorization: `Basic ${code}`,
            "X-Password": `${newPassword.value}`
        }

    })
        .then(response => {
            if (response.status === 200) {
            const success = createElement("Password changed successfully!", "h3");
            addResult(success);} else {throw new Error(`Failed to change password, error ${response.status}`);}
        })
        .catch(e => {
            const error = createElement(`${e.message}`,"h3");
            addResult(error);
        });


} catch (e) {
        const error = createElement(`${e.message}`,"h3");
        addResult(error);
}
    login.value="";
    password.value="";
    newPassword.value="";
    newPasswordRepeated.value="";
}
