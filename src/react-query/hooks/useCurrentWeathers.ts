import { useQuery } from "react-query";
// import apiClient from "../../services/api-client";
import axios from "axios";

interface data {
  temperature: number;
  icon : string;
}

interface FetchWeatherResponse {
    message: string;
    data: data;
}

const useCurrentWeathers = () => {
  const headers = { api_key: '47758073513ba5cbcf0f3020c4b14f40a6ac3e2dd9813be793f77dfe04417857'}
  
  const fetchWeather = () =>
    axios
      .get<FetchWeatherResponse>('https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12&lng=77' + {headers})
      .then(res => res.data)

  return useQuery({
    queryKey: ['Weather'],
    queryFn: fetchWeather
  });
};

export default useCurrentWeathers;