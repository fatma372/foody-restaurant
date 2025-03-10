'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function TopRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/recipes?limit=4&skip=20');
        const data = await res.json();
        setRecipes(data.recipes);
        console.log(data.recipes)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <div className="max-w-3xl h-2xl text-center pt-2.5">Loading recipes...</div>; // Display a loading message  
  }

  if (!recipes || recipes.length === 0) {
    return <div className="max-w-3xl h-2xl text-center pt-5">No recipes found.</div>; // Handle empty array case  
  }

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-3 p-9 px-10 md:px-20 flex-wrap">
      <h2 className="font-bold text-2xl">
        Our Top Recipes:
      </h2>
      <p className="text-gray-600 text-md text-center my-3">
        Discover our top 4 recipes from our extensive menu.
        Please note that this is a dummy API response. Actual recipe data will be fetched from a real API.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 sm:px-8 md:px-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="relative border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {recipe.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sed quae sit nulla! Itaque, recusandae.
              </p>
              <Link
                href={`/recipes/${recipe.id}`}
                className="bg-amber-600 text-white text-center py-2 px-4 rounded-md border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-colors duration-300"
              >
                See Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <div className=" grid md:grid-cols-4 gap-5 relative">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="relative border-amber-600 border-2 rounded-md p-5 flex flex-col min-h-110 gap-3">
           <div className=" relative min-h-[200px] max-h-[200px]">
           <Image
              className="object-cover "
              src={recipe.image}
              alt={recipe.name}
              fill
            />
           </div>
            <h2 className="font-semibold text-center text-xl">
              {recipe.name}
            </h2>
            <p className="text-normal text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sed quae sit nulla! Itaque, recusandae.
            </p>
            <Link href={`/recipes/${recipe.id}`} className="bg-amber-600 px-5 py-2 rounded-lg text-center border-amber-600 border-2 hover:bg-amber-900 hover:border-amber-900">
              <span className="text-white ">See Recipe</span>
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}
