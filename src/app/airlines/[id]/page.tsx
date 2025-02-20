import ShowMore from "./ShowMore";
import { flightInfo } from "@/utils";
import { Frown } from "lucide-react";
import SearchComponent from "@/components/Search";
import { FlightCard } from "@/components/FlightCard";
import { mappings, FlightInfo } from "@/types/index";

interface FlightsProps {
   params: {
      id: string; // IATA code
   };
   searchParams: {
      query: string;
      limit: number;
   };
}

export default async function Flights({ params, searchParams }: FlightsProps) {
   const flight_data = await flightInfo(params.id); // Fetch flight data based on IATA code
   const query = searchParams?.query || "";
   const limit = searchParams?.limit || 30;

   
   
   const filteredFlights = flight_data.filter((flight: FlightInfo) => flight.airline.iata && flight.airline.iata.toLowerCase().includes(query.toLowerCase())).slice(0, limit);
   const count: number = filteredFlights.length;
   console.log(count);

   return (
      <div className='w-full mx-auto px-8 md:px-8 py-8'>
         <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
               <h1 className='text-3xl font-bold'>{mappings[params.id]}</h1>
               <div className='bg-muted px-3 py-1 rounded-md text-sm font-medium'>{count} Active Flights</div>
            </div>
            <p className='text-muted-foreground'>Track the current status of {mappings[params.id]} flights.</p>
         </div>

         <SearchComponent placeholder={`Search for ${mappings[params.id]} flight numbers`} />

         {filteredFlights.length > 0 ? (
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8'>
               {filteredFlights.map((flight: FlightInfo) => (
                  
                  <FlightCard
                     key={flight.airline.iata}
                     flight={flight}
                     name={mappings[params.id]}
                     arrival={flight.arrival}
                     airline={flight.airline}
                     departure={flight.departure}
                     live={flight.live}
                     aircraft={flight.aircraft}
                  />
               ))}
            </div>
         ) : (
            <div className='text-center py-8 text-muted-foreground'>
               <p className='inline-flex items-center justify-center'>
                  No results found
                  <Frown className='ml-2' />
               </p>
            </div>
         )}

         <ShowMore pageNumber={(searchParams.limit || 30) / 30} isNext={(searchParams.limit || 30) > filteredFlights.length} />
      </div>
   );
}
