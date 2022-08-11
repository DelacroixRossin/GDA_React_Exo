import logo from "../img/logo192.png";

function Header() {
    return (
      <header>
        <img src={logo} alt="" />
        <nav className="nav">
          <ul className="bar">
            <a href="#">Prix</a>
            <a href="#">Services</a>
            <a href="#">Contacts</a>
            <a href="#">A propos</a>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header;