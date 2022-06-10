import { Route, Router, Routes } from 'react-router';
import './App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Blog from './pages/Blog/Blog';
import Footer from './pages/Footer/Footer';
import ContactMe from './pages/Home/ContactMe/ContactMe';
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails';
import Navbar from './pages/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<ContactMe />}></Route>
        <Route path='/projectss/:detailsid' element={<ProjectDetails />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
