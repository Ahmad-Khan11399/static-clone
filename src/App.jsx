import Head from "./components/head";
import Mid from "./components/midsection";
import AboutUs from "./components/aboutus";
import USP from "./components/usp";
import Pic from "./components/pic";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Head />
        <Mid />
        <AboutUs />
        <USP />
        <Pic />
        <Footer />
      </div>
    </>
  );
}

export default App;
