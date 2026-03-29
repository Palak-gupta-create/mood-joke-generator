async function getJoke() {
  const category = document.getElementById("category").value;
  const jokeText = document.getElementById("joke");

  jokeText.innerText = "Loading AI joke... 🤖";

  try {
    const res = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    const data = await res.json();

    if (data.type === "single") {
      jokeText.innerText = data.joke;
    } else {
      jokeText.innerText = data.setup + " 😂 " + data.delivery;
    }

  } catch (error) {
    jokeText.innerText = "Error loading joke 😢";
  }
}

function copyJoke() {
  const text = document.getElementById("joke").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied 😎");
}