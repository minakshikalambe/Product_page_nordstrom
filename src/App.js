import {Women_Page} from "./component/women-page";
import{Nvabar} from"./component/navbar"
import{Routes,Route} from"react-router-dom"
import { CartProvider } from "react-use-cart";
import './App.css';
import { Cart } from "./component/cart_page";

function App() {
  return (
    <div className="App">
       <Nvabar/>
     <Routes>
      <Route path="/women" element={<CartProvider><Women_Page/></CartProvider>}></Route>
      <Route path="/cart" element={<CartProvider><Cart/></CartProvider>}></Route>
    </Routes>
    </div>
  );
}

export default App;
