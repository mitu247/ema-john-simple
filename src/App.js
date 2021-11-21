import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail.js/ProductDetail';

function App() {
  const Component1 = () => {
    return <Shop></Shop>;
  };
  const Component2 = () => {
    return <Review></Review>;
  };
  const Component3 = () =>{
    return <Inventory></Inventory>;
  }
  const Component4 = () =>{
    return <ProductDetail></ProductDetail>;
  }
  const Apple = () => {
    let routes = useRoutes([
      { path:"/shop",element:<Component1/> }, {path: "/review",element:<Component2/>},
      {path: "/manage",element:<Component3/>} ,{path: "/",element:<Component1/>},
      {path: "/product/:productKey",element:<Component4/>},
      {path: "/*",element:<p>Sorry, page not found</p>}
    ]);
    return routes;
  }
  return (
    <div>
      <Header></Header>
      <Router>
      <Apple/>
      </Router>
    </div>
  );
}

export default App;
