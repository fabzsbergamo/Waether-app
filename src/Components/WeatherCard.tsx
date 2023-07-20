// import 'bootstrap/dist/css/bootstrap.css'
import useCurrentWeathers from '../react-query/hooks/useCurrentWeathers';
import { cloud } from '../assets';

function WeatherCard() {

  // const Weather= () => {
    const {data: CurrentWeather } = useCurrentWeathers();

  return (
  <section id="weather" className="flex flex-col sm:px-16 px-6 ">
    <div className="card grid grid-cols-4 gap-4">
      <div className="flex justify-center items-center col-span-4 ...">
        <p className="font-poppins font-medium text-[20px] leading-[23.4px] text-gradient px-8">London, City of London, Greater London, United Kingdom</p>
      </div>

      <div className="col-span-2 ... py-4">
            <a href="http://localhost:5173/" target="_blank" className="flex justify-center items-center">
             <img src={cloud} className="logo" alt="Vite logo" />
            </a>
            <p className="flex justify-center items-center text-gradient">Partly Cloudy</p>
            <p className="flex justify-center items-center text-gradient text-[40px]">17c{CurrentWeather?.data.temperature}</p>
      </div>
      
      <div className="col-span-2 ... py-4">
            <p className="flex justify-center items-center text-gradient py-2">Wind:</p>
            <p className="flex justify-center items-center text-gradient py-2">Precip:</p>
            <p className="flex justify-center items-center text-gradient py-2">Pressure:</p>
      </div>

      <div className="grid grid-cols-5 gap-4 col-span-5 ...">
          <div className=" text-gradient col-span-1 ...">
           1 of 5
          </div>
          <div className=" text-gradient col-span-1 ...">
           2 of 5
          </div>
          <div className=" text-gradient col-span-1 ...">
           3 of 5
          </div>
          <div className=" text-gradient col-span-1 ...">
           4 of 5
          </div>
          <div className=" text-gradient col-span-1 ...">
           5 of 5
          </div>
      </div>
    </div>
  </section> 
    );
  // };
};

export default WeatherCard;