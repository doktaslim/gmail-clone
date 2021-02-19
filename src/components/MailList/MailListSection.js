import React from "react";
import "./MailListSection.css";

const MailListSection = ({ Icon, title, selected }) => {
  return (
    <div className={`mailListSection ${selected && "mailListSection--active"}`}>
      <Icon />
      <h5>{title}</h5>
    </div>
  );
};

export default MailListSection;
