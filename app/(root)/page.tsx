import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-contain py-10 md:py-16">
        <div className="wrapper 2xl:gap-0">
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="h1-bold text-center text-4xl md:text-5xl lg:text-6xl text-white bg-indigo-600 p-6 mb-6 rounded-md shadow-lg">
              EventScale
            </h1>
            <h2 className="h2-bold text-center">
              Your events managed with ease.!
            </h2>
            <p className="p-regular-20 md:p-regular-24 text-center">
            Access valuable insights and expert advice from mentors associated with leading companies in our thriving global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
