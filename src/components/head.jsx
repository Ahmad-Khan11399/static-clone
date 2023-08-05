import logo from "./logo.jpeg";
import Button from "./button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const Head = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="#">Save</a>
        <a href="#">Travel</a>
        <a href="#">Experience</a>
        <a href="#">Wallet</a>
        <Button Display="Contact Us" />
      </div>
    </nav>
  );
};
export default Head;
