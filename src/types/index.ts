export interface Airline {
   name: string;
   iataCode: string;
}



interface DepartureInfo {
   airport: string;
   timezone: string;
   iata: string;
   icao: string;
   terminal: string;
   gate: string;
   delay: number;
   scheduled: string;
   estimated: string;
   actual: string;
   estimated_runway: string;
   actual_runway: string;
 }
 
 interface ArrivalInfo {
   airport: string;
   timezone: string;
   iata: string;
   icao: string;
   terminal: string;
   gate: string;
   baggage: string;
   delay: number;
   scheduled: string;
   estimated: string;
   actual: string | null;
   estimated_runway: string | null;
   actual_runway: string | null;
 }
 
 interface AirlineInfo {
   name: string;
   iata: string;
   icao: string;
 }
 
 interface FlightDetails {
   number: string;
   iata: string;
   icao: string;
   codeshared: string | null;
 }
 
 interface AircraftInfo {
   registration: string;
   iata: string;
   icao: string;
   icao24: string;
 }
 
 interface LiveInfo {
   updated: string;
   latitude: number;
   longitude: number;
   altitude: number;
   direction: number;
   speed_horizontal: number;
   speed_vertical: number;
   is_ground: boolean;
 }
 
 export interface FlightInfo {
   flight_date: string;
   flight_status: string;
   departure: DepartureInfo;
   arrival: ArrivalInfo;
   airline: AirlineInfo;
   flight: FlightDetails;
   aircraft: AircraftInfo;
   live: LiveInfo | null;
 }
 

 


export const airlinesList: Airline[] = [
   { name: "Qatar Airways", iataCode: "QR" },
   { name: "Singapore Airlines", iataCode: "SQ" },
   { name: "Cathay Pacific", iataCode: "CX" },
   { name: "Air Canada", iataCode: "AC" },
   { name: "Lufthansa", iataCode: "LH" },
   { name: "British Airways", iataCode: "BA" },
   { name: "Emirates", iataCode: "EK" },
   { name: "Air France", iataCode: "AF" },
   { name: "American Airlines", iataCode: "AA" },
   { name: "United Airlines", iataCode: "UA" },
   { name: "Delta", iataCode: "DL" },
   { name: "Japan Airlines", iataCode: "JL" },
   { name: "Air India", iataCode: "AI" },
   { name: "EgyptAir", iataCode: "MS" },
   { name: "Qantas", iataCode: "QF" },
   { name: "Etihad Airways", iataCode: "EY" },
   { name: "Turkish Airlines", iataCode: "TK" },
   { name: "Southwest Airlines", iataCode: "WN" },
   { name: "Swiss", iataCode: "LX" },
   { name: "AirAsia", iataCode: "AK" },
   { name: "KLM", iataCode: "KL" },
   { name: "Virgin Atlantic", iataCode: "VS" },
   { name: "Alaska Airlines", iataCode: "AS" },
   { name: "JetBlue Airways", iataCode: "B6" },
   { name: "Thai Airways", iataCode: "TG" },
   { name: "All Nippon Airways", iataCode: "NH" },
   { name: "Gulf Air", iataCode: "GF" },
   { name: "Malaysia Airlines", iataCode: "MH" },
   { name: "Ryanair", iataCode: "FR" },
   { name: "easyJet", iataCode: "U2" },
   { name: "Air New Zealand", iataCode: "NZ" },
   { name: "SAS", iataCode: "SK" },
   { name: "IndiGo", iataCode: "6E" },
   { name: "SpiceJet", iataCode: "SG" },
   { name: "Vistara", iataCode: "UK" },
   { name: "Saudi Arabian Airlines", iataCode: "SV" },
   { name: "Kuwait Airways", iataCode: "KU" },
   { name: "Oman Air", iataCode: "WY" },
   { name: "SriLankan Airlines", iataCode: "UL" },
   { name: "Bangladesh Biman", iataCode: "BG" },
   { name: "Garuda Indonesia", iataCode: "GA" },
   { name: "Philippine Airlines", iataCode: "PR" },
   { name: "Vietnam Airlines", iataCode: "VN" },
   { name: "Korean Air", iataCode: "KE" },
   { name: "China Airlines", iataCode: "CI" },
   { name: "EVA Air", iataCode: "BR" },
];

// mappings for airline IATA codes;
export const mappings: { [key: string]: string } = {
   QR: "Qatar Airways",
   SQ: "Singapore Airlines",
   CX: "Cathay Pacific",
   AC: "Air Canada",
   LH: "Lufthansa",
   BA: "British Airways",
   EK: "Emirates",
   AF: "Air France",
   AA: "American Airlines",
   UA: "United Airlines",
   DL: "Delta",
   JL: "Japan Airlines",
   AI: "Air India",
   MS: "EgyptAir",
   QF: "Qantas",
   EY: "Etihad Airways",
   TK: "Turkish Airlines",
   WN: "Southwest Airlines",
   LX: "Swiss",
   AK: "AirAsia",
   KL: "KLM",
   VS: "Virgin Atlantic",
   AS: "Alaska Airlines",
   B6: "JetBlue Airways",
   TG: "Thai Airways",
   NH: "All Nippon Airways",
   GF: "Gulf Air",
   MH: "Malaysia Airlines",
   FR: "Ryanair",
   U2: "easyJet",
   NZ: "Air New Zealand",
   SK: "SAS",
   "6E": "IndiGo",
   SG: "SpiceJet",
   UK: "Vistara",
   SV: "Saudi Arabian Airlines",
   KU: "Kuwait Airways",
   WY: "Oman Air",
   UL: "SriLankan Airlines",
   BG: "Bangladesh Biman",
   GA: "Garuda Indonesia",
   PR: "Philippine Airlines",
   VN: "Vietnam Airlines",
   KE: "Korean Air",
   CI: "China Airlines",
   BR: "EVA Air",
};