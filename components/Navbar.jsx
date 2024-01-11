import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className=" bg-red-tone-1 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"} className="text-white text-2xl font-bold">
            CineRave
          </Link>

          <div className="flex space-x-4">
            <Link href={"/"} className="text-white">
              Home
            </Link>
            <Link href={"/Contacts"} className="text-white">
              Contacts
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
