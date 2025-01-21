# Pokemon Search

Pokemon Search is a web application that allows you to search and view information about different Pokémon using the PokeAPI.

## Features

- Search for Pokémon by name.
- View a list of Pokémon with pagination.
- View details of each Pokémon, including its image and name.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Toastify**: For displaying notifications.
- **Material UI**: React component library for modern design.
- **Sass**: CSS preprocessor for more efficient styles.

## Project Structure

```
pokemon_search/
├── public/
│   ├── index.html
│   └── IconoPokemonSearch.png
├── src/
│   ├── apis/
│   │   └── GetDataPokemons.js
│   ├── components/
│   │   ├── ItemPokemon.jsx
│   │   ├── Loader.jsx
│   │   ├── Search.jsx
│   │   └── index.js
│   ├── App.jsx
│   ├── App.scss
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pokemon_search.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pokemon_search
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the application:
    ```bash
    npm start
    ```
2. Open your browser and go to `http://localhost:3000`.

## Available Scripts

- `npm start`: Starts the application in development mode.
- `npm run build`: Builds the application for production.
- `npm test`: Runs the tests.
