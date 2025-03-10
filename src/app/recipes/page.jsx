'use client';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RecipesPage() {
  const baseLink = 'https://dummyjson.com/recipes';
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchRef = useRef(null);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.recipes);
      console.log(data.recipes);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const searchTerm = searchRef.current.value.toLowerCase(); // Get value from ref
    console.log(searchTerm);
    if (searchTerm) {
      fetchData(`${baseLink}/search?q=${searchTerm}`)
    }
  };

  useEffect(() => {
    fetchData(baseLink);
  }, []);

  if (loading) {
    return <div className="text-center">Loading recipes...</div>; // Display a loading message
  }

  return (
    <div className="p-7">
      <p className=" text-center">
        Discover our diverse collection of recipes, each with its own unique flavors and ingredients.
      </p>
      <div className="w-full flex items-center justify-center my-3">
        <input
          type="text"
          ref={searchRef}
          onChange={handleSearch}
          className="w-[80%] mx-auto p-3 rounded-md border-1 border-amber-700"
          placeholder="Or search your favourite recipe.."
        />
      </div>
      <h2 className="font-bold text-xl text-amber-700">Recipes:</h2>
      <div className="p-4 min-h-screen">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="relative border-b-amber-600 border-b-2 p-5 flex sm:flex-row flex-col items-center justify-start gap-[20px]">
            <div className="flex justify-center items-center relative mb-3">
              <Image
                className="relative rounded-full object-cover mx-auto"
                src={recipe.image}
                alt={recipe.name}
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">{recipe.name}</h2>
              <h4 className="text-gray-600">
                <span className="font-semibold text-gray-700">Ingredients: </span>
                {recipe.ingredients.join(', ')} {/* Join ingredients array into a string */}
              </h4>
              <Link href={`/recipes/${recipe.id}`} className="text-amber-700 hover:font-bold w-[100px]" >
                See Recipe {">"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}