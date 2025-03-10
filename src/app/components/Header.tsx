import Link from "next/link"
const Header = () => {
  return (
    <header className=" bg-black text-white flex gap-4 justify-between items-center flex-col sm:flex-row py-4 px-9">
        <h1 className="text-2xl font-bold"> 
          <Link href={'/'}>Foody</Link> 
          </h1>
        <nav>
          <ul className="flex gap-3 ">
            <li> <Link href="/" className="hover:text-amber-700 hover:font-semibold transition-all duration-100">Home</Link> </li>
            <li> <Link href="/about" className="hover:text-amber-700 hover:font-semibold transition-all duration-100">About</Link> </li>
            <li> <Link href="/recipes" className="hover:text-amber-700 hover:font-semibold transition-all duration-100">Recipes</Link> </li>
            <li> <Link href="/contact" className="hover:text-amber-700 hover:font-semibold transition-all duration-100">Contact</Link> </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header