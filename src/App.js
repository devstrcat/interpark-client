import "./styles/common.css";
import Header from "./components/Header";
import Visual from "./components/Visual";
import Recommend from "./components/Recommend";
import Tour from "./components/Tour";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="main">
        <Visual />
        <Recommend />
        <Tour />
      </div>
      <Footer />
    </div>
  );
}

export default App;
