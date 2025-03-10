import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    
<section className="hero-section max-w-[100svw] h-[80svh] relative">
      <Image 
      src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" 
      alt="restaurant"
      fill
      />

      <div className="description text-white absolute z-50 flex justify-center items-center flex-col gap-3 p-12 h-full">
        <h2 className="text-4xl text-center font-bold text-white ">Welcome to our restaurant!</h2>
        <p className="text-lg text-gray-300 text-center w-[80%] ">We serve delicious and fresh food, with a focus on our signature dishes Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quam. Magnam, consequuntur..</p>
        <Link href="/recipes" className="bg-amber-700 px-5 py-2 rounded-lg hover:bg-black border-amber-700 border-2 hover:text-white transition-all duration-300">
          <p >See Our Recipes</p>
        </Link>
      </div>
     </section>
  )
}
