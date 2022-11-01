import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./app/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
