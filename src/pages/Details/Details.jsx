/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import { useParams } from "react-router-dom";

export default function Details() {
  const {
    recipeDetails,
    setRecipeDetails,
    handleAddToFavorites,
    favoritesList,
  } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data) {
          setRecipeDetails(data?.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getRecipeDetails();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group ">
          <img
            src={recipeDetails?.recipe?.image_url}
            className="w-full h-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-green-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-red-950 text-wrap">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetails?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetails?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-2xl font-semibold text-green-600">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-mono text-black">
                  {" "}
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
