import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import "../../styles/views/Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  }

  return (
    <div className="header">
      <Button className="header-button" onClick={() => handleNavigation('/')}>Home</Button>
      <Button className="header-button" onClick={() => handleNavigation('/ml_projects')}>ML Projects</Button>
      <Button className="header-button" onClick={() => handleNavigation('/web_projects')}>Web Projects</Button>
      <Button className="header-button" onClick={() => handleNavigation('/cv')}>Full CV</Button>
      <Button className="header-button" onClick={() => handleNavigation('/publications')}>Publications</Button>
      <Button className="header-button" onClick={() => handleNavigation('/hobbies')}>Hobbies</Button>
      <Button className="header-button" onClick={() => handleNavigation('/contact')}>Contact</Button>
      <img src={"/images/roger_3.jpeg"} alt="Profile" className="profile-picture" />
    </div>
  );
};

export default Header;

