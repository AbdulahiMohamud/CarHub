import Image from 'next/image'
import {Hero, SearchBar, CustomFilter, CarCard} from "@/components";
import {fetchCars} from "@/utils";

export default async function Home() {
    const allCars = await fetchCars()


    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
        <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">Car Catalog</h1>
                <p>Explore the car you like</p>
            </div>

            <div className="home__filters">
                <SearchBar  />

                <div
                    className="home__filter-container">
                    <CustomFilter title="year" />
                    <CustomFilter title="fuel" />

                </div>
            </div>
            {
                !isDataEmpty ?(
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car) => (
                                <CarCard car = {car} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl">
                            Oops, no results
                            <p>{allCars?.message}</p>
                        </h2>
                    </div>
                )
            }

        </div>

    </main>
  )
}
