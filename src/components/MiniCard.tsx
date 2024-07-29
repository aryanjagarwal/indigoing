import React from 'react'
import { FlightInfo } from '@/types'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";


interface Props {
    flight: FlightInfo;
    name: string;
    // my code
    arrival: FlightInfo["arrival"];
    airline: FlightInfo["airline"];
    departure: FlightInfo["departure"];
    live: FlightInfo["live"]
 }

const MiniCard = ({ flight, name, arrival, airline, departure, live }: Props) => {

    const { iata } = airline;
   const { flight_status} = flight;
   //const { iata } = departure.iata;
   const { iata: depIata } = departure;
   const { iata: arrIata } = arrival;
   //const { speed_horizontal } = live;
   const speed = live ? live.speed_horizontal : 'N/A'; // Add a null check for live

    return (
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
    )
}

export default MiniCard