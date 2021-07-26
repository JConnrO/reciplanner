// UNDER CONSTRUCTION
async function loginHandler(event) {
    event.preventDefault();

    const userEmail = document.querySelector('.email-login').value.trim();
    const userPassword = document.querySelector('.password-login').value.trim();

    if (userEmail && userPassword) {
        // Need route to be to be fetched
        const userResponse = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (userResponse.ok) {
            //Replace dashboard
            document.location.replace('');
        } else {
            alert(userResponse.statusText);
        }
    }
};

async function signupHandler(event) {
    event.preventDefault();

    const emailSignup = document.querySelector('.email-signup').value.trim();
    const passwordSignup = document.querySelector('.password-signup').value.trim();

    if (emailSignup && passwordSignup) {
        // Need route to be to be fetched
        const userResponse = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (userResponse.ok) {
            //Replace dashboard
            document.location.replace('/dashboard/');
        } else {
            alert(userResponse.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);

document.querySelector('.signup-form').addEventListener('submit', signupHandler);
