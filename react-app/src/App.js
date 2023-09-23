import './App.css';
import {
  Routes, 
  Route, 
  BrowserRouter as Router,
} from 'react-router-dom'

//components imports
import Hero from './components/Hero';
import RockImage from './components/RockImage';

//css file imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'
import './css/rockimage.css'

function App() {

return (
  <div id="App">
      <Hero />
      <RockImage />
  </div>
);
}

export default App;
