import { toast } from "react-toastify";

export const GetPokemons = async (limit, offset) => {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}.`;
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    toast.error(`An error has occurred: ${error}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

export const GetSinglePokemon = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    toast.error(`An error has occurred: ${error}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};
