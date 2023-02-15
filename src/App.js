import MyNav from "./Components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GenresComponent from "./Components/GenresComponent";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div>
      <MyNav />
      <GenresComponent />
      <MyFooter />
    </div>
  );
}

export default App;
