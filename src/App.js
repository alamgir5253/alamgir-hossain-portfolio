import './App.css';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
  <Home ></Home>
  <Footer />      
    </div>
  );
}

export default App;
