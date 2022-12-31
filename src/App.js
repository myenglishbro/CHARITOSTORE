import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:idCategory' element={<ItemListContainer/>}></Route>
      <Route path='/producto/:idProduct' element={<ItemDetailContainer/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
