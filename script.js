fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(data => data.json())
    .then(jokeData => {
        // Correct property access
        const jokeText = jokeData.joke;

        // Get the jokeElement and update it
        const jokeElement = document.getElementById('jokeElement');

        if (jokeElement) {
            jokeElement.innerHTML = jokeText;
        } else {
            console.error('Element with ID "jokeElement" not found.');
        }
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });
