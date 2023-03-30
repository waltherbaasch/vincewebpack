document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML="Hello, webpack!",e}());
async function getRandomJoke() {
    const url = 'https://icanhazdadjoke.com/';
    const headers = {
      'Accept': 'application/json'
    };
    const response = await fetch(url, { headers });
    const data = await response.json();
    document.getElementById('joke').textContent = data.joke;
  }
  