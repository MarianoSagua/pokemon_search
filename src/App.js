import { Container } from '@mui/material';
import './App.scss';
import Search from './components/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useMemo, useState } from 'react';
import { GetSinglePokemon, GetPokemons } from './API/GetDataPokemons';
import ItemPokemon from './components/ItemPokemon';
import Loader from './components/Loader';

function App() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(1);

  const filteredPokemons = useMemo(() => 
    pokemons.filter((p)=>{
      return p.name.toLowerCase().includes(pokemonSearch.toLowerCase());
    }), [pokemons, pokemonSearch]
  );

  const getData = async ()=>{
    try {
      setLoading(true);
      let response;

      if(pokemonSearch === ""){
        const offset = (page - 1) * 6;
        response = await GetPokemons(6, offset);
      }else{
        response = await GetPokemons(18, 0);
      }

      const pokemonsPromises = response.results.map((item) => GetSinglePokemon(item.url));
      const pokemonsData = await Promise.all(pokemonsPromises);
      setPokemons(pokemonsData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData();
  }, [pokemonSearch, page]);

  const onAddValue = (value)=>{
    setPokemonSearch(value);
  }

  return (
    <div className='pokemons'>
      <Container maxWidth="lg" className='pokemons__container'>
        <section className='pokemons__container--search'>
          <h2>Pokemon Search</h2>
          <Search onAddValue={onAddValue}/>
        </section>

        <section className='pokemons__container--items'>
            <div className='pokemons__container--items--cards'>
              {loading ?
                <>
                  <Loader/>
                </>
                : 
                <>
                  {filteredPokemons.length === 0 ? 
                    (
                      <p className='textoNoEncontrado'>No se encontraron resultados</p>
                    ) 
                    : 
                    (
                      filteredPokemons.map((item, idx) => {
                        return <ItemPokemon item={item} key={idx}/>;
                      })
                    )
                  }
                </>
              }
            </div>

            <div className='pokemons__container--items--pagination'>
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                <ArrowBackIosIcon fontSize='large' color='success'/>
              </button>

              <p>{page} - 3</p>

              <button onClick={() => setPage(page + 1)} disabled={page === 3}>
                <ArrowForwardIosIcon fontSize='large' color='success'/>
              </button>
            </div>
        </section>
      </Container>
    </div>
  );
}

export default App;







