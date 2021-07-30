async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const youtube_url = document.querySelector('input[name="youtube-url"]').value;
  const description = document.querySelector('input[name="description"]').value;

  const response = await fetch(`/api/recipes`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      youtube_url,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    // takes users to homepage
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}


function deleteFormHandler(event) {
  event.preventDefault();

  const id = this.id
  // const id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  // console.log('THIS IS AN ID');
  // console.log(id);
  const response = fetch(`/api/recipes/${id}`, {
    method: 'DELETE'
  });
 
  location.replace('/dashboard/');
 
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
