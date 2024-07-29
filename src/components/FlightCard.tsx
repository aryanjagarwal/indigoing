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
   departure: FlightInfo["departure"];
   live: FlightInfo["live"]
}




//export function FlightCard({ flight, name }: Props) {
export function FlightCard({ flight, name, arrival, airline, departure, live }: Props) {
   //const { flight_iata, status, speed, dep_iata, arr_iata } = flight;
   // mycode
   const { iata } = airline;
   const { flight_status} = flight;
   //const { iata } = departure.iata;
   const { iata: depIata } = departure;
   const { iata: arrIata } = arrival;
   //const { speed_horizontal } = live;
   const speed = live ? live.speed_horizontal : 'N/A'; // Add a null check for live
   


   return (
      <Card key={iata}>
         <CardContent className='grid gap-4'>
            <div className='flex items-center justify-between'>
               <div className='font-medium'>{iata}</div>
               <div
                  className={`px-2 py-1 rounded-md text-sm font-medium ${
                     flight.flight_status === "landed" ? "bg-green-500 text-blue-50" : flight.flight_status === "en-route" ? "bg-blue-500 text-yellow-50" : "bg-gray-500 text-green-50"
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
                     <div className='grid grid-cols-2 gap-x-10 gap-y-3 py-2'>
                        
                        {Object.entries(flight).map(([key, value]) => (
                           <div className='flex justify-between gap-5 w-full text-right' key={key}>
                              <div className='text-muted-foreground capitalize'>{key.split("_").join(" ")}</div>
                              <div>{typeof value === 'object' ? JSON.stringify(value) : value}</div>
                              {/*<div>{value}</div> */}
                           </div>
                        ))}

                     </div>
                  </DialogContent>
               </Dialog>

               

            </div>
         </CardContent>
      </Card>
   );





  /*
   
   return (
      <Card key={flight_iata}>
         <CardContent className='grid gap-4'>
            <div className='flex items-center justify-between'>
               <div className='font-medium'>{flight_iata}</div>
               <div
                  className={`px-2 py-1 rounded-md text-sm font-medium ${
                     flight.status === "landed" ? "bg-green-500 text-blue-50" : flight.status === "en-route" ? "bg-blue-500 text-yellow-50" : "bg-gray-500 text-green-50"
                  }`}>
                  {status}
               </div>
            </div>

            <div className='flex justify-between'>
               <div className='flex flex-col gap-1'>
                  <div className='text-sm text-muted-foreground'>Departure</div>
                  <div className='text-2xl font-medium'>{dep_iata}</div>
               </div>
               <div className='flex flex-col gap-1'>
                  <div className='text-sm text-muted-foreground'>Arrival</div>
                  <div className='text-2xl font-medium'>{arr_iata}</div>
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
                           {name} {flight.flight_iata}
                        </DialogTitle>
                     </div>
                     <div className='grid grid-cols-2 gap-x-10 gap-y-3 py-2'>
                        {Object.entries(flight).map(([key, value]) => (
                           <div className='flex justify-between gap-5 w-full text-right' key={key}>
                              <div className='text-muted-foreground capitalize'>{key.split("_").join(" ")}</div>
                              <div>{value}</div>
                           </div>
                        ))}
                     </div>
                  </DialogContent>
               </Dialog>
            </div>
         </CardContent>
      </Card>
   );



   */
}



