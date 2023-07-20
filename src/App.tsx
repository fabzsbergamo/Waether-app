import Navbar from './Components/Navbar';
import WeatherCard from './Components/WeatherCard';
import Footer from './Components/Footer';
import './index.css';
import StartNow from './Components/StartNow';
import Reviews from './Components/testimonials';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar/>
        <StartNow/>
        <WeatherCard/>
        <Reviews/>
        <Footer/>
      </div>
    </div>   
  </div>
  ); 

export default App;
