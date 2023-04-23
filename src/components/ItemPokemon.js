import React from 'react'

const ItemPokemon = ({ item }) => {
  const { id, name, sprites } = item;

  return (
    <div>
      {id && id % 2 === 0 ? 
        <>
          <div className='cardPokemonVioleta'>
            <p className='cardPokemonVioleta__id'>{id}</p>
            <div className='cardPokemonVioleta__img'>
              <img src={sprites.front_default} alt={name}/>
            </div> 
            <p className='cardPokemonVioleta__name'>{name}</p>
          </div>  
        </>
        :
        <>
          <div className='cardPokemon'>
            <p className='cardPokemon__id'>{id}</p>
            <div className='cardPokemon__img'>
              <img src={sprites.front_default} alt={name}/>
            </div> 
            <p className='cardPokemon__name'>{name}</p>
          </div>  
        </>
      }
    </div>
  )
}

export default ItemPokemon

