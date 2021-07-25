async function upvoteClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // api route will be updated once POST.JS model and controller is complete
    const response = await fetch('/api/posts/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  // select id of button and run function on click
  document.querySelector('#upvote').addEventListener('click', upvoteClickHandler);
  