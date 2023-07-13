import "./App.css"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Bookings from "./components/Bookings"
import Cart from "./components/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;