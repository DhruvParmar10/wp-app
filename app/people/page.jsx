import { getPeople } from "@/utils/request";
import { peopleCard } from "@/components/peopleCard";

export default async function peoplePage() {
  const people = await getPeople();

  return (
    <section class="container mx-auto my-8">
      <div class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {people.map((people) => {
          return <peoplePage key={people.id} shows={people} />;
        })}
      </div>
    </section>
  );
}
