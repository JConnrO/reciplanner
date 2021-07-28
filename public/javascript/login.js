// UNDER CONSTRUCTION
async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector('.email-login').value.trim();
    const password = document.querySelector('.password-login').value.trim();

    if (email && password) {
        // Need route to be to be fetched
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            //Replace dashboard
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

async function signupHandler(event) {
    event.preventDefault();

    const username = document.querySelector('.user-signup').value.trim();
    const email = document.querySelector('.email-signup').value.trim();
    const password = document.querySelector('.password-signup').value.trim();

    if (username && email && password) {
        // Need route to be to be fetched
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            //Replace dashboard
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);

document.querySelector('.signup-form').addEventListener('submit', signupHandler);
