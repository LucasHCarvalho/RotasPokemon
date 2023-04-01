import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Pokemon from './Components/pokemon';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route path='/pokemon'>
        <Route index element={<Home/>}/>
        <Route path=':pokemonId' element={<Pokemon/>}/>
      </Route>
    </Routes>
  );
}

export default App;
