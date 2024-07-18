import "./button.styles.css";

export const BUTTON_TYPES_CLASSES = {
  base: "b-base",
  danger: "danger",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={buttonType} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
