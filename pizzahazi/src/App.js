import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { PizzaCreate } from "./pizzaCreate";
import { PizzaDelete } from "./pizzaDelete";
import { PizzaList } from "./pizzaList";
import { PizzaMod } from "./pizzaMod";
import { PizzaSingle } from "./pizzaSingle";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Pizzák</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/uj-pizza`} className="nav-link">
              <span className="nav-link">Új pizza</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<PizzaList/>} />
          <Route path="/Pizza/:pizzaId" element={<PizzaSingle/>} />
          <Route path="uj-pizza" element={<PizzaCreate/>} />
          <Route path="mod-pizza/:pizzaId" element={<PizzaMod/>} />
          <Route path="del-pizza/:pizzaId" element={<PizzaDelete/>} />
      </Routes>
    </Router>
  );
}

export default App;