import './App.css';
import LoginPage from "./pages/LoginPage"
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import TableFood from './components/TableFood';
import ProtectedRoute from './components/ProtectedRoute';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import AddCategory from './pages/AddCategory';
import CategoryList from './pages/CategoryList';
import EditCategory from './pages/EditCategory';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ 
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        }>
          <Route path=":foodId" element={<EditPage/>}/>
          <Route path="form" element={<AddPage/>}/>
          <Route path="foods" element={<TableFood/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="categoryForm" element={<AddCategory/>}/>
          <Route path="categoryList" element={<CategoryList/>}/>
          <Route path="category/:id" element={<EditCategory/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
