import './App.css';

//components imports
import Hero from './components/Hero';
import RockImage from './components/RockImage';
import Banner1 from './components/Banner1'
import IconsSection from './components/IconsSection';
import Banner2 from './components/Banner2';
import Carousel from './components/Carousel';
import Footer from './components/Footer'

//css file imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'
import './css/rockimage.css'
import './css/banner1.css'
import './css/icons-section.css'
import './css/banner2.css'
import './css/carousel.css'
import './css/footer.css'

function App() {

return (
  <div id="App">
      <Hero />
      <RockImage />
      <Banner1 />
      <IconsSection />
      <Banner2 />
      <Carousel />
      <Footer />
  </div>
);
}

export default App;
