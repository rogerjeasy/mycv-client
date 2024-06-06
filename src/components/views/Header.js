import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import "../../styles/views/Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('/');

  const handleNavigation = (path) => {
    setActiveButton(path);
    navigate(path);
  }

  return (
    <div className="header">
      <div className="header-buttons">
        <Button
          className={`header-button ${activeButton === '/' ? 'active' : ''}`}
          onClick={() => handleNavigation('/')}
        >
          Home
        </Button>
        <Button
          className={`header-button ${activeButton === '/ml_projects' ? 'active' : ''}`}
          onClick={() => handleNavigation('/ml_projects')}
        >
          ML Projects
        </Button>
        <Button
          className={`header-button ${activeButton === '/web_projects' ? 'active' : ''}`}
          onClick={() => handleNavigation('/web_projects')}
        >
          Web Projects
        </Button>
        <Button
          className={`header-button ${activeButton === '/cv' ? 'active' : ''}`}
          onClick={() => handleNavigation('/cv')}
        >
          Full CV
        </Button>
        <Button
          className={`header-button ${activeButton === '/publications' ? 'active' : ''}`}
          onClick={() => handleNavigation('/publications')}
        >
          Publications
        </Button>
        <Button
          className={`header-button ${activeButton === '/hobbies' ? 'active' : ''}`}
          onClick={() => handleNavigation('/hobbies')}
        >
          Hobbies
        </Button>
        <Button
          className={`header-button ${activeButton === '/contact' ? 'active' : ''}`}
          onClick={() => handleNavigation('/contact')}
        >
          Contact
        </Button>
      </div>
      <img src={"/images/roger_3.jpeg"} alt="Profile" className="profile-picture" />
    </div>
  );
};

export default Header;





