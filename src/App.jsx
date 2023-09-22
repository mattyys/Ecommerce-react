import "./App.css";
import { ItemContainer } from "./components/itemContainer/ItemContainer";
import { Footer } from "./layouts/footer/Footer";
import { NavBar } from "./layouts/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemContainer />
      <Footer />
    </>
  );
}

export default App;
