import Link from "next/link";
export const Navbar = () => {



 
  return (
    <nav className={`w-11/12 mx-auto h-12  ease-in duration-300 transition-all shadow flex items-center justify-between top-2 px-4 max-md:pl-0 rounded-full border-red-500 border-2`}>
      <div className="bg-red-500 hover:cursor-pointer hover:animate-spin  hover:bg-black ease-in-out duration-500 transition-colors rounded-full w-7 h-7 text-2xl font-bold text-white flex items-center justify-center">
        L
      </div>

      <ul className={`list-none flex justify-evenly mr-10 w-72 `}>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/pages/services"}>
          <li>Service</li>
        </Link>
        <Link href={"/pages/articles"}>
          <li>Articles</li>
        </Link>
        <Link href={"/pages/about"}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};
