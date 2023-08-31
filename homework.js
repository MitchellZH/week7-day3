const formEl = document.querySelector("form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const pokeName = formEl[0].value;
  pokeData(pokeName);
});

const pokeData = async (name) => {
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  const data = await response.json();
  let abilities = ""
  for (ability of data["abilities"]) {
    abilities += ability["ability"]["name"] + " ";
  }

  const pokemonInfo = {
    name: data["name"],
    abilities: abilities,
    base_xp: data["base_experience"],
    hp: data["stats"][0]["base_stat"],
    attack: data["stats"][1]["base_stat"],
    defense: data["stats"][2]["base_stat"],
    sprites: data["sprites"]["front_shiny"],
  };

  const str2 = data['name'].charAt(0).toUpperCase() + data['name'].slice(1);

  const cardDiv = document.querySelector("#searchedPokemon");
  cardDiv.setAttribute('class', 'pokemonCard')
  cardDiv.innerHTML = `
    <img src="${pokemonInfo.sprites}" alt="pic of ${pokemonInfo.name}" style="width: 350px;">
    <h1>${str2}</h1>
    <hr>
    <p>Base XP: ${pokemonInfo.base_xp}</p>
    <p>Abilities: ${pokemonInfo.abilities}</p>
    <p>HP: ${pokemonInfo.hp}</p>
    <p>Attack: ${pokemonInfo.attack}</p>
    <p>Defense: ${pokemonInfo.defense}</p>
  `;
};