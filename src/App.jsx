import { useEffect, useMemo, useState } from "react";
import { ItemPokemon, Loader, Search } from "./components";
import { GetSinglePokemon, GetPokemons } from "./apis/GetDataPokemons";
import { Container } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { toast } from "react-toastify";

function App() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(1);
  const filteredPokemons = useMemo(
    () =>
      pokemons.filter((p) => {
        return p.name.toLowerCase().includes(pokemonSearch.toLowerCase());
      }),
    [pokemons, pokemonSearch]
  );

  useEffect(() => {
    (async () => {
      let response;

      try {
        setLoading(true);
        if (pokemonSearch === "") {
          const offset = (page - 1) * 6;
          response = await GetPokemons(6, offset);
        } else {
          response = await GetPokemons(18, 0);
        }

        const pokemonsPromises = response.results.map((item) =>
          GetSinglePokemon(item.url)
        );
        const pokemonsData = await Promise.all(pokemonsPromises);
        setPokemons(pokemonsData);
        setLoading(false);
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
    })();
  }, [pokemonSearch, page]);

  const onAddValue = (value) => {
    setPokemonSearch(value);
  };

  return (
    <div className="pokemons">
      <Container maxWidth="lg" className="pokemons__container">
        <section className="pokemons__container--search">
          <h2>Pokemon Search</h2>
          <Search onAddValue={onAddValue} />
        </section>

        <section className="pokemons__container--items">
          <div className="pokemons__container--items--cards">
            {loading ? (
              <Loader />
            ) : (
              <>
                {filteredPokemons.length === 0 ? (
                  <p className="textoNoEncontrado">
                    No se encontraron resultados
                  </p>
                ) : (
                  filteredPokemons.map((item, idx) => {
                    return <ItemPokemon item={item} key={idx} />;
                  })
                )}
              </>
            )}
          </div>

          <div className="pokemons__container--items--pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              <ArrowBackIosIcon fontSize="large" color="success" />
            </button>

            <p>{page} - 3</p>

            <button onClick={() => setPage(page + 1)} disabled={page === 3}>
              <ArrowForwardIosIcon fontSize="large" color="success" />
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default App;
