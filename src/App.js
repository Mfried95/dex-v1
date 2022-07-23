import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import News from "./pages/News";
import Navbar from './components/Navbar';



function App() {
  console.log(window.location)


  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Coins' element={<Coins/>} />
          <Route path='/News' element={<News/>} />
      </Routes>  
    </>
      
  );
}



export default App;