import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <h1 className="lg:text-4xl text-xl text-center text-green-700 font-bold">
        Cooking... Please wait!
      </h1>
    );
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-red-500 font-bold">
            Think of any ingredient and type it away then hit Enter!
          </p>{" "}
        </div>
      )}
    </div>
  );
}