// airline info API call (cached) :
export async function airlineInfo(name: string) {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/airlines?iata=` + name,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.ninja_api_key || ''
        }
      });

    const result = await response.json();
    console.log("fetched results");
    return result;
  }

  catch (error) {
    return error;
  }
}

/*
// airline based flight info API call (updated to use query parameters):
export async function flightInfo(airline_iata: string) {
  const api_base = 'https://airlabs.co/api/v9/flights';
  const api_key: string = process.env.airlabs_api_key || '';
  const params = new URLSearchParams({ api_key, airline_iata });

  try {
    const response = await fetch(`${api_base}?${params.toString()}`,
      {
        next: { revalidate: 5 },
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

    const result = await response.json();
    console.log("fetched results");
    return result;
  } catch (error) {
    return error;
  }
}

*/

// my code



//import fetch from 'node-fetch';
/*

export async function flightInfo(airline_iata: string) {
  const api_base = 'http://api.aviationstack.com/v1/flights';
  const api_key: string = process.env.access_key || '';
  const params = new URLSearchParams({
      access_key: api_key,
      airline_iata, 
      limit: '30'
    });

  try {
    const response = await fetch(`${api_base}?${params.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();
    console.log("fetched results");
    return result;
    } catch (error) {
    console.log(error);
    return error;
  }}

  */

  
  import { FlightInfo } from '@/types/index';
  export async function flightInfo(airline_iata: string): Promise<FlightInfo[]> {
    const api_base = 'http://api.aviationstack.com/v1/flights';
    const access_key: string = process.env.access_key || '';
    const params = new URLSearchParams({ access_key, airline_iata, limit: '60' });
  
    try {
      const response = await fetch(`${api_base}?${params.toString()}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Assuming the API response has a 'data' field containing the flight information
        return result.data as FlightInfo[];
      } else {
        throw new Error(result.message || 'Failed to fetch flight information');
      }
    } catch (error) {
      console.error('Error fetching flight data:', error);
      throw error;
    }
  }

  
  
  

   