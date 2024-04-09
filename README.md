# Recipe Search Application

This application allows users to search for recipes based on ingredients and view recipe details. It is built using React and Tailwind CSS.
Live URL: https://assilko.github.io/food-recipe-app/

## Features

- Search for recipes using ingredient names.
- View recipe details including ingredients and instructions.
- Add recipes to favorites for quick access.
- Responsive design using Tailwind CSS for a modern and mobile-friendly UI.

## Technologies Used

- React
- React Router DOM
- Tailwind CSS
- Forkify API (https://forkify-api.herokuapp.com/)


## Project Structure

    src/components/Navbar/Navbar.jsx: Navigation bar component.
    src/pages/Home/Home.jsx: Home page component displaying recipe search form and results.
    src/pages/Favorites/Favorites.jsx: Favorites page component displaying favorite recipes.
    src/pages/Details/Details.jsx: Details page component displaying recipe details.
    src/context/GlobalState.jsx: Global state management using React context API.
    src/App.js: Main application component rendering routes and layout.

## Usage

    Enter ingredient names (e.g., "banana", "bread", "pizza") in the search bar.
    Click on search to retrieve recipes based on the entered ingredient.
    Click on a recipe to view its details including ingredients and cooking instructions.
    Add recipes to favorites by clicking the heart icon.
    View favorite recipes on the Favorites page.

## Credits

    Forkify API (https://forkify-api.herokuapp.com/): Provides recipe data for the application.
