// const data = {
//     message: "Welcome to our world, fellow traveler!",
//     endpoints: {
//       root: "https://gsi-api.herokuapp.com/",
//       characters: "https://gsi-api.herokuapp.com/characters",
//       voices: "https://gsi-api.herokuapp.com/voices",
//       banners: "https://gsi-api.herokuapp.com/banners"
//     },
//     statistics: {
//       characters: 51,
//       media: 30,
//       voices: 47,
//       banners: 39
//     }
//   };
  
//   // Example usage
//   console.log(data.message); // Outputs: Welcome to our world, fellow traveler!
//   console.log(data.endpoints.characters); // Outputs: https://gsi-api.herokuapp.com/characters
//   console.log(data.statistics.characters); // Outputs: 51
  

async function getPokemonData(id) {
   const response = await fetch (
    `https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response);
   const data = await response.json();
   console.log(data);
//    console.log(data.results[131]);
   return data;
}


async function displayPokemonData(){
    const id = 132 // ditto
    const pokemonData = await getPokemonData(id);
    console.log(pokemonData);
    console.log(pokemonData.sprites);
    console.log(pokemonData.sprites.grong_shiny);
    console.log(pokemonData.stats[1].base_stat);
    console.log(pokemonData.stats[1].name);

    for (let i = 0; i < pokemonData.stats.length; i++) {
        const pokemonStats =pokemonData.stats[i];
        console.log(pokemonStats);
        console.log(pokemonStats.base_stat);
        console.log(pokemonStats.stat.name);
    }
    const pokemonCard = `
    <div>
    <h2>${pokemonData.id}. ${pokemonData.name}</h2>
    <img class="dittoimg": src="${pokemonData.sprites.front_default}">
    </div>`;
    console.log(pokemonCard);

    // const pokeDex = document.getElementById("pokeDex");
    // pokeDex.appendChild(pokemonCard.innerHTML);

    document.getElementById("pokeDex").innerHTML = pokemonCard;
}

displayPokemonData();