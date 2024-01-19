"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  return (
    <div>
      <nav className="bg-red-tone-1 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link
            href={"/"}
            className="text-white text-2xl font-bold mb-4 md:mb-0"
          >
            CineRave
          </Link>

          <form role="search" onSubmit={(e) => handleSubmit(e)}>
            <div className="relative w-full md:w-72 flex items-stretch mb-4 md:mb-0">
              <input
                type="search"
                className="relative text-white m-0 -mr-0.5 block w-full min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-red-tone-2 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button
                className="relative z-[2] flex items-center rounded-r bg-red-tone-3 border px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="submit"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link href={"/"} className="text-white">
              Home
            </Link>
            <Link href={"/people"} className="text-white">
              People
            </Link>
            <Link href={"/Trending"} className="text-white">
              Trending
            </Link>
            <Link href={"/Aboutus"} className="text-white">
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
