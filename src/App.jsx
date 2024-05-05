import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/detail/:id" element={<Detail />} />  
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
