import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

export default function Favorites() {
  const { favoritesList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <h1 className="lg:text-4xl text-xl text-center text-green-700 font-bold">
        Cooking... Please wait!
      </h1>
    );
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-red-500 font-bold">
            What kind of an Earthling are you? Add at least a Banana Dish as
            your favorite.
          </p>{" "}
        </div>
      )}
    </div>
  );
}
