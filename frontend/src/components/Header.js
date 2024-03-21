import PropTypes from "prop-types";
import Button from "./Button.js";

const Header = ({ title, onAdd, showAdd, onEdit }) => {
  const onClick = () => {
    console.log("click!");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} text={showAdd ? "Close" : "Add"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Note App",
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
