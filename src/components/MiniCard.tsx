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
                
            </DialogContent>
        </Dialog>
    )
}

export default MiniCard