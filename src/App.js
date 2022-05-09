import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Orders from './Component/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
