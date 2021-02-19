import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebarOptions ${selected && 'sidebarOptions--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <small>{number}</small>
    </div>
  );
};

export default SidebarOptions;
