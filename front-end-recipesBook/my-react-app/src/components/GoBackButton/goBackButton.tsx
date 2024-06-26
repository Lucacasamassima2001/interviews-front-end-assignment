import React from "react";
import Button from "../../UI/Button/button.tsx";
import { useNavigate } from "react-router-dom";
export const GoBackButton = ({ color }) => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={onGoBack}>
      <i
        style={{ color: color ? color : "#74512d" }}
        className="fa-solid fa-arrow-left"
      ></i>
    </Button>
  );
};
