import Hero from "./components/Hero"
import TopChefs from "./components/TopChefs";
import TopRecipes from "./components/TopRecipes";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
     <Hero></Hero>
     <TopRecipes></TopRecipes>
     <TopChefs></TopChefs>
     <Contact></Contact>
    </>
  );
}
