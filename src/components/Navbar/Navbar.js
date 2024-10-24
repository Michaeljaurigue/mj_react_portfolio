import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MJ
            {/* MJ <i className="fab fa-typo3" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Web Development
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/GraphicDesign"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Graphic Design
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/DigitalMarketing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Digital Marketing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/artwork"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Artwork
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Contact</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
