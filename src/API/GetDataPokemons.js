export const GetPokemons = async (limit, offset)=>{
    try {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}.`;
        const response = await fetch(URL);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const GetSinglePokemon = async (url)=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.log(error);
    }
}