import MyNav from "./Components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GenresComponent from "./Components/GenresComponent";
import MyFooter from "./Components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalComp from "./Components/ModalComp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<GenresComponent />}></Route>
          <Route path="/movie-details/:movieId" element={<ModalComp />}></Route>
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
