import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <ItemListContainer greeting="Shannon"/>
        <ItemDetailContainer /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:categories" element={<ItemListContainer />} />
          <Route path="/products/:categories/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;