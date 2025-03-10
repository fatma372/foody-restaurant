'use client'; // Mark this component as a Client Component
import { useParams } from 'next/navigation'; // Use useParams instead of useRouter
import { useEffect, useState } from 'react';
import Link from 'next/link';

const RecipePage = () => {
  const params = useParams(); // Access route parameters
  const recipeId = params.recipeId; // Get recipeId from params
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!recipeId) return; // Do nothing if recipeId is not available

    const fetchRecipe = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipe(data);
      } catch (e) {
        console.error('Could not fetch recipe:', e);
        setError(e.message); // Set error state if something goes wrong
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]); // Fetch the recipe whenever recipeId changes

  if (loading) {
    return <div className='min-h-[80vh]'>Loading recipe...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className='flex flex-col gap-3 p-7 bg-gray-200 min-h-[100svh]'>
      <h2 className='text-xl text-amber-800 font-bold text-center'>{recipe.name}</h2>

      <img src={recipe.image} alt={recipe.name} 
      className='shadow-2xl w-[200] h-[200px] md:h-[250px] sm:w-[60%] lg:h-[43vh] mx-auto sm:rounded-md rounded-full' />
      <div>
      <p className='font-bold text-xl text-green-800 mb-2'>Ingredients: </p>
        <p className='border-l-3 border-green-900 pl-3'>
          {recipe.ingredients.join(', ')}.
        </p>
      </div>

      <div>
        <p className='font-bold text-xl text-amber-800'>Instructions: </p>

        <ol className='list-decimal p-5 bg-white rounded'>
          {recipe.instructions.map((instruction, i) => {
            return (
              <li key={i} className='ml-2'>{instruction}</li>
            )

          })}
        </ol>


      </div>
      <Link href="/recipes" className="bg-amber-600 text-center text-white text-lg px-5 py-2 rounded-lg hover:bg-black border-amber-600 border-2 hover:border-black transition-all duration-300">
          See all recipes
        </Link>
    </div >
  );
};

export default RecipePage;