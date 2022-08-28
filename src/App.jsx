import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
