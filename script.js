
const list = {
    'shamratopu@gmail.com': 'emaillist123',
    'zafourahamed@gmail.com': 'mypass987',
    'shamratpg@gmail.com': 'beautifulcow876'
}
function checkUser(email, pass) {
    for (i in list) {
        if (i === email) {
            if (list[i] === pass) return true;
        }
    }
    return false;
}
document.getElementById('btn').addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    if (checkUser(email, pass)) {
        window.location.href = 'statement.html'
    }
    else {
        alert('invalid email or password');
    }
})

