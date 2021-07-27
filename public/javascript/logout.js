async function logoutHandler() {
    console.log(logoutHandler());
    const response = await fetch('/api/users', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.logout').addEventListener('click', logout);
  