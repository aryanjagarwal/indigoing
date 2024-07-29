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

  
  
  

   