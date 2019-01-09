import React from "react";
import PropTypes from "prop-types";

const styles = {
  border: "1px solid #eee",
  borderRadius: 3,
  backgroundColor: "#3498db",
  cursor: "pointer",
  fontSize: 15,
  padding: "3px 10px",
  color: "#fff",
  margin: 10
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={styles} type="button">
    {children}
  </button>
);

Button.displayName = "ButtonCustom";
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};
Button.defaultProps = {
  onClick: () => {}
};

export default Button;
