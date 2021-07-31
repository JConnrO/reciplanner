async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="recipe-title"]').value.trim();
  const description = document.querySelector('input[name="recipe-description"]').value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/recipes/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);