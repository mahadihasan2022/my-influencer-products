import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Review from './components/Review/Review'
import Search from './components/Search/Search';
import DashBoard from './components/DashBoard/DashBoard';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Home' element={<Home></Home>}></Route>
      <Route path='/Products' element={<Shop></Shop>}></Route>
      <Route path='/Review' element={<Review></Review>}></Route>
      <Route path='/DashBoard' element={<DashBoard></DashBoard>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Search' element={<Search></Search>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
