import React, { useState } from "react";
import ReactDropdown from "react-dropdown";
import { useNavigate } from "react-router-dom";

const MyMenu = () => {
  const navigate = useNavigate();

  // State chứa danh sách menu item
  const [menuItems, setMenuItems] = useState([
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "about", path: "/about" },
    { id: 3, label: "FileDownload", path: "/FileDownload" },
    { id: 4, label: "ProductApp", path: "/ProductApp" },
  ]);

  const options = ["Home2", "About", "ProductApp"];
  const optionActionPath = ["/", "about", "/ProductApp"];

  const defaultOption = options[0];

  const handleSelect = (option) => {
    console.log("Selected:", option.value);
    const index = options.indexOf(option.value);
    console.log("path", optionActionPath[index]);
    navigate(optionActionPath[index]);
  };

  return (
    <ReactDropdown
      options={options}
      onChange={handleSelect}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default MyMenu;
