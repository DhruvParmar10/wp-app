export default function Card() {
  return (
    <>
      <div class="bg-white p-4 rounded-md shadow-md">
        <img
          src="The-10.jpg"
          alt="Movie Poster"
          class="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 class="text-xl font-bold mb-2">Movie Title</h2>
        <p class="text-gray-600">Release Year: 2023</p>
        <p class="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          urna quis erat.
        </p>
        <div class="mt-4">
          <span class="text-gray-700">Rating:</span>
          <span class="text-yellow-500 font-bold">4.5/5</span>
        </div>
      </div>
    </>
  );
}
