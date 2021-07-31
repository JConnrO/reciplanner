// var vote= document.getElementById('upvoteCount')
var vote= 45
async function upvoteClickHandler(event) {
  console.log(vote)
    event.preventDefault();
  alert('working!');
  vote++;
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ];
    // api route will be updated once POST.JS model and controller is complete
    const response = await fetch('/api/recipes/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        user_id: user_id,
        recipe_id: recipe_id,
        vote_count: vote
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
  