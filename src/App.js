import "./index.css";
import  NavBar  from "./components/nav";
import Product from "./components/product";
import Related from "./components/likeProducts";
import Popular from "./components/popularPdct";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Product />
      <Related />
      <Popular />
      <Footer />
    </div>
  );
}
