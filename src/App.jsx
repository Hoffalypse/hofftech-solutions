
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  { Contact, Home }   from "./pages"

const App = () => (
  <div>
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {/* <Header /> */}
          <div className="">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
               <Route 
                path="/contact" 
                element={<Contact />} 
              />
            </Routes>
          </div>
    
        </div>
      </Router>
  </div>
);

export default App;
