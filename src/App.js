// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import BuyerInterest from "./Components/BuyerInterest.jsx";
import Cart from './Components/Cart.jsx';
import SellerForm from "./Components/SellerForm.jsx";
import { Context } from './Store/ContextProvider.jsx';
function App() {
     
    const ctx = useContext(Context);

  return (
    <div className="App">
      {ctx.openCart && ctx.Cart.length>0 && <Cart/>}
     <SellerForm/>
     <BuyerInterest/>
    </div>
  );
}

export default App;
