import logo from './logo.svg';
import './App.css';
import SellerInfo from './components/SellerInfo';
import Items from './components/Items';

function App() {
  return (
    <div>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
     <SellerInfo/>
    <Items/>

    </div>
  );
}

export default App;
