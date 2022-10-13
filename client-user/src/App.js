import './App.css';
import NavBar from "./components/NavBar"
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from "./pages/DetailPage"
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/detail/:foodId" element={<DetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
