import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className=" bg-red-tone-2 text-white text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Discover and Rate Movies</h1>
          <p className="mt-4">
            Find the latest and greatest movies. Share your ratings and reviews
            with the community.
          </p>
        </div>
      </header>

      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Top 20 Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
      </section>

      <section class="container mx-auto my-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card />
        </div>
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Top 20 Series</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
      </section>

      <section class="container mx-auto my-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card />
        </div>
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Trending Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
      </section>

      <section class="container mx-auto my-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card />
        </div>
      </section>
    </>
  );
}
