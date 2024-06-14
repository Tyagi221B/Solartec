import './App.css';

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import About from "./Pages/About"
import Features from './Pages/Features';
import Testimonial from './Pages/Testimonial';
import Team from './Pages/Team';
import Service from './Pages/Service';
import Quote from './Pages/Quote';
import Project from './Pages/Project';
import Page404 from './Pages/Page404';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Features" element={<Features />}></Route>
          <Route path="/Page404" element={<Page404 />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Quote" element={<Quote />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/Testimonial" element={<Testimonial />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
