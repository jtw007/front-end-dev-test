import './App.css';
import {
  Routes, 
  Route, 
  BrowserRouter as Router,
} from 'react-router-dom'

//components imports
import Hero from './components/Hero';
import RockImage from './components/RockImage';
import Banner1 from './components/Banner1'
import IconsSection from './components/IconsSection';

//css file imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'
import './css/rockimage.css'
import './css/banner1.css'
import './css/icons-section.css'

function App() {

return (
  <div id="App">
      <Hero />
      <RockImage />
      <Banner1 />
      <IconsSection />
  </div>
);
}

export default App;
