import './App.css';
import Products from './Component/Products';
import Posts from './pages/Post';
import Recipes from './pages/recipes';
import Register from './Component/Register';
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './Services/ProtectedRoutes';
// import Searchbar from './Component/Searchbar';
// import { SearchItem } from './Component/SearchItem';
import ProductDetail from './Component/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Products />} />
          </Route>
           {/* <Route path="product/:id" element={<ProductDetail/>}/>
           <Route path="search/:title" element={<SearchItem/>}/> */}
          <Route path="/Post"  element={<Posts/>}/> 
          <Route path="/recipes" element={<Recipes/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;


