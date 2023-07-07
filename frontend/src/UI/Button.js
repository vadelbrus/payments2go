import classes from "./Button.module.css";

const Button = ({ title, type, isActive }) => {
  const buttonClasses = isActive
    ? `${classes["action-button"]} ${classes["active"]} `
    : classes["action-button"];
  return (
    <button className={buttonClasses} type={type}>
      {title}
    </button>
  );
};

export default Button;
