/* eslint-disable react/prop-types */
import Button from "../../UI/Button/button";
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
