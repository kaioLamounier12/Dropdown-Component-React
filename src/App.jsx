import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import ToDo from "./pages/to do/ToDo"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/task' element={<ToDo/>}/>
      </Routes>
    </>
  );
}

export default App;
