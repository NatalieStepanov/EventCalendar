import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthComponent from './components/AuthComponent'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/*' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/authComponent' element={<AuthComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
