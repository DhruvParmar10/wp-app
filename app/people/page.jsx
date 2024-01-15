import { getPeople } from "@/utils/request";
import PeopleCard from "@/components/peopleCard";

export default async function PeoplePage() {
  const people = await getPeople();

  return (
    <section className="container mx-auto my-8">
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {people.map((person) => {
          return <PeopleCard key={person.id} shows={person} />;
        })}
      </div>
    </section>
  );
}
