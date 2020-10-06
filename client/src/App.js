import React, { useEffect, useState } from 'react';
import ReactGa from 'react-ga'
import './App.scss';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Socials from './components/Socials/Socials';
import Hamburger from './components/Hamburger.js/Hamburger';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import Approach from './components/Approach/Approach';
import Blog from './components/Blog/Blog';
import BlogPage from './components/BlogPage/BlogPage';
import Contact from './components/Contact/Contact';
import Strategy from './components/Strategy/Strategy';
import Career from './components/Career/Career';
import Leadership from './components/Leadership/Leadership';
import Privacy from './components/Privacy/Privacy';
import ScrollToTop from './components/ScrollToTop';
import PageNotFound from './components/404/404';
import CookiePopup from './components/CookiePopup/CookiePopup';

function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    ReactGa.initialize("UA-177100391-1")
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="App" style={open ? { pointerEvents: "none" } : null}>

        <Nav open={open} setOpen={setOpen} />
        <Hamburger open={open} setOpen={setOpen} />
        <Socials />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/approach' component={Approach} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blog/:id' component={BlogPage} />
          <Route path='/contact' component={Contact} />
          <Route path='/strategy' component={Strategy} />
          <Route path='/career' component={Career} />
          <Route path='/partners' component={Strategy} />
          <Route path='/leadership' component={Leadership} />
          <Route path='/privacy' component={Privacy} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
        <CookiePopup />
      </div>
    </Router>
  );
}

export default App;
