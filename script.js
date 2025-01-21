const pokemonInput = document.querySelector('#pokemon-input');

async function getPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    // console.log(data.results[131]);
    return data;
  }
  
  async function displayPokemonData(event) {
    if (event.key !== 'Enter') return;
    const pokemonName = pokemonInput.value.toLowerCase(); // 132 gives Ditto
    const pokemonData = await getPokemonData(pokemonName);
    console.log(pokemonData);
    console.log(pokemonData.sprites);
    console.log(pokemonData.sprites.back_shiny);
    console.log(pokemonData.stats[1].base_stat); // Attack number
    console.log(pokemonData.stats[1].stat.name); // Attack name
  
    for (let i = 0; i < pokemonData.stats.length; i++) {
      const pokemonStats = pokemonData.stats[i];
      console.log(pokemonStats);
      console.log(pokemonStats.base_stat); // Attack number
      console.log(pokemonStats.stat.name); // Attack name
    }
  
    const pokemonCard = `
    <!-- Kode lånt i meet-chatten fra undervisning -->
    <div>
        <h2>${pokemonData.id}. ${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <ul>
          ${pokemonData.stats
            .map(
              (stat) => `
          <li>${stat.base_stat} ${stat.stat.name}</li>`
            )
            .join("")}
        </ul>
      </div>
    `;
    console.log(pokemonCard);
  
    // const pokeDex = document.getElementById("pokeDex"); 
    // pokeDex.appendChild(pokemonCard);
  
    document.getElementById("pokeDex").innerHTML = pokemonCard;
  }
  
  pokemonInput.addEventListener('keyup', displayPokemonData);

  