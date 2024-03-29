const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apiKey = "VBcE1O7PgQd0RDFknmIARA==Aozi7fZUYICinba3";

const options = {
    method:"GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

    try {

    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke!";

    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened! :( Please try again.";
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke!";
    }

    
};

btnEl.addEventListener("click", getJoke);