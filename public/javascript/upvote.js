// var vote= document.getElementById('upvoteCount')
// var vote= 45
async function upvoteClickHandler(event) {
  
    event.preventDefault();
  alert('working!');
    const id= req.body.id
    console.log(id)

    const response = await fetch('/api/recipes/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        user_id: id
        // recipe_id: recipe_id,
        // vote_count: vote
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
  