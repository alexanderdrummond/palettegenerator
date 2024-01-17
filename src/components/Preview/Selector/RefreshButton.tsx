import React from "react";
import "./RefreshButton.scss";
import RefreshIcon from "../../../assets/Refresh.svg";

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="refresh-button">
      <img src={RefreshIcon} className="icon" />
    </button>
  );
};

export default RefreshButton;
