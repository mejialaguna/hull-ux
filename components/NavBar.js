import request from "../utils/request";
import { useRouter } from "next/router"

function NavBar() {
    const router = useRouter()
  // console.log(Object.entries(request));
  const genre = Object.entries(request);
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 md:space-x-20 overflow-x-scroll overscroll-x-contain scrollbar-hide">
        {genre.map(([key, { title }]) => {
          // console.log(key);
          return (
            <h2
              onClick={() => {router.push(`/?genre=${key}`)}}
              className="active:text-red-900 cursor-pointer hover:text-white transition ease-in-out  hover:scale-125 duration-300 "
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 left-0  bg-gradient-to-r from-gray-900 h-8 w-1/12" />
      <div className="absolute top-0 right-0  bg-gradient-to-l from-gray-900 h-8 w-1/12" />
    </nav>
  );
}

export default NavBar;
