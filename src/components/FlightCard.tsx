import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FlightInfo } from "@/types/index";


interface Props {
   flight: FlightInfo;
   name: string;
   // my code
   arrival: FlightInfo["arrival"];
   airline: FlightInfo["airline"];
   aircraft: FlightInfo["aircraft"];
   departure: FlightInfo["departure"];
   live: FlightInfo["live"]
}





export function FlightCard({ flight, name, arrival, airline, departure, live, aircraft }: Props) {
   
   const { iata } = airline;
   const { flight_status } = flight;
   //const { iata } = departure.iata;
   const { iata: depIata } = departure;
   const { iata: arrIata } = arrival;
   //const {registration} = aircraft;
   const registration = aircraft ? aircraft.registration : 'N/A';  // Add a null check for aircraft
   const aircraftIata = aircraft ? aircraft.iata : 'N/A'
   //const { speed_horizontal } = live;
   const speed = live ? live.speed_horizontal : 'N/A'; // Add a null check for live



   return (
      <Card key={iata}>
         <CardContent className='grid gap-4'>
            <div className='flex items-center justify-between'>
               <div className='font-medium'>{iata}</div>
               <div
                  className={`px-2 py-1 rounded-md text-sm font-medium ${flight.flight_status === "scheduled" ? "bg-green-500 text-blue-50" : flight.flight_status === "active" ? "bg-blue-500 text-yellow-50" : "bg-gray-500 text-green-50"
                     }`}>
                  {flight_status}
               </div>
            </div>

            <div className='flex justify-between'>
               <div className='flex flex-col gap-1'>
                  <div className='text-sm text-muted-foreground'>Departure</div>
                  <div className='text-2xl font-medium'>{depIata}</div>
               </div>
               <div className='flex flex-col gap-1'>
                  <div className='text-sm text-muted-foreground'>Arrival</div>
                  <div className='text-2xl font-medium'>{arrIata}</div>
               </div>
            </div>

            <div className='flex items-center justify-between gap-4'>
               <div className='text-sm text-muted-foreground'>Speed: {speed} mph</div>



               <Dialog>
                  <DialogTrigger asChild>
                     <Button variant='outline'>View Flight Details</Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[600px]'>
                     <div className='flex items-center justify-between border-b pb-4'>
                        <DialogTitle>
                           {name} {airline.iata}
                        </DialogTitle>
                     </div>
                     

                     <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">Flight {flight.flight.number} ({flight.airline.name})</h2>
                        <p className="text-sm text-gray-600 mb-4">Flight Date: {flight.flight_date}</p>
                        <div className="mb-4">
                           <h3 className="text-xl font-semibold">Departure</h3>
                           <p>Airport: {flight.departure.airport} ({flight.departure.iata})</p>
                           <p>Terminal: {flight.departure.terminal}, Gate: {flight.departure.gate}</p>
                           <p>Scheduled: {new Date(flight.departure.scheduled).toLocaleString()}</p>
                           <p>Estimated: {new Date(flight.departure.estimated).toLocaleString()}</p>
                           <p>Actual: {flight.departure.actual ? new Date(flight.departure.actual).toLocaleString() : 'N/A'}</p>
                           <p>Delay: {flight.departure.delay} minutes</p>
                        </div>
                        <div className="mb-4">
                           <h3 className="text-xl font-semibold">Arrival</h3>
                           <p>Airport: {flight.arrival.airport} ({flight.arrival.iata})</p>
                           <p>Terminal: {flight.arrival.terminal}, Gate: {flight.arrival.gate}</p>
                           <p>Scheduled: {new Date(flight.arrival.scheduled).toLocaleString()}</p>
                           <p>Estimated: {new Date(flight.arrival.estimated).toLocaleString()}</p>
                           <p>Actual: {flight.arrival.actual ? new Date(flight.arrival.actual).toLocaleString() : 'N/A'}</p>
                           <p>Delay: {flight.arrival.delay} minutes</p>
                           <p>Baggage Claim: {flight.arrival.baggage}</p>
                        </div>
                        <div className="mb-4">
                           <h3 className="text-xl font-semibold">Aircraft</h3>
                           <p>Registration: {registration}</p>
                           <p>Model: {aircraftIata}</p>
                        </div>
                        {live && (
                           <div className="mb-4">
                              <h3 className="text-xl font-semibold">Live Data</h3>
                              <p>Updated: {new Date(live.updated).toLocaleString()}</p>
                              <p>Latitude: {live.latitude}</p>
                              <p>Longitude: {live.longitude}</p>
                              <p>Altitude: {live.altitude} meters</p>
                              <p>Direction: {live.direction}°</p>
                              <p>Speed: {live.speed_horizontal} km/h</p>
                              <p>Vertical Speed: {live.speed_vertical} m/s</p>
                              <p>On Ground: {live.is_ground ? 'Yes' : 'No'}</p>
                           </div>
                        )}
                     </div>



                  </DialogContent>
               </Dialog>



            </div>
         </CardContent>
      </Card>
   );

}



