import './App.css';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCategories from './Components/Filter/AllCategories';




function App() {
  return (
    <div className='App'>
      <div className='container'>
       <Clothes/>
      </div>
       <div className='container'>
        <AllCategories/>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
