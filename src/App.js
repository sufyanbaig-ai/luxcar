import './App.css';

import { Header } from './Component/Hero/Header';
import Nav from './Component/Hero/Nav';
import Heros from './Component/Hero/Heros';
import Categories from'./Component/Hero/Categories';
import Featured from'./Component/Hero/Featured';
import Localoffers from'./Component/Hero/Localoffers';
import BuyNow from './Component/Hero/BuyNow';
import Destination from './Component/About Us/Destinations';
import Testimonials from './Component/About Us/Testimonials'
import PopularMakes from './Component/Hero/PopularMakes'
import Footerfm from './Component/About Us/Footerfm'
import LFooter from './Component/Hero/LFooter'
function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <Heros/>
    <Categories/>
    <Featured/>
    <Localoffers/>
    <BuyNow/>
    <Destination/>
    <Testimonials/>
    <PopularMakes/>
    <Footerfm/>
    <LFooter/>
    </>
  );
}

export default App;
