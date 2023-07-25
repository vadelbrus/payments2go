const Button = ({
  title,
  action,
  type,
  onClickHandler,
  handleMouseEnter,
  handleMouseLeave,
  padding,
  border,
  color,
  bgColor,
  children,
  height,
  width,
  fontWeight,
  fontSize,
  cursor,
  transition,
}) => {
  return (
    <button
      onClick={onClickHandler}
      title={title}
      action={action}
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding,
        border,
        color,
        backgroundColor: bgColor,
        children,
        height,
        width,
        fontWeight,
        fontSize,
        cursor,
        transition,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
