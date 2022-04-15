import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Pages/Shared/Footer/Footer';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Pages/Shared/Header/Header';
import ServiceDetail from './components/Pages/ServiceDetail/ServiceDetail';
import NotFound from './components/Pages/Shared/NotFound';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './components/Pages/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/checkout" element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>

        <Route path="/services/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
