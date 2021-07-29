async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/recipes/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

// async function deletePost(id) {
//   console.log(deletePost);
//   const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];
//   a$.ajax({
//     method: "DELETE",
//     url: `/api/recipes + ${id}`
//   })
//     .then(() => {
//       getPosts(postCategorySelect.val());
//     });
//   console.log(id);
// };

// document.querySelector('.delete-post-btn').addEventListener('click', deletePost);