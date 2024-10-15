import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Saleimage from "./components/Sale image";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popularsection from "./components/Popular section";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Saleimage></Saleimage>
      <Recommended></Recommended>
      <Topics></Topics>
      <Popularsection></Popularsection>
      <Footer></Footer>
    </div>
  );
}

export default App;
