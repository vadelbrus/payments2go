import CardIcon from "./../assets/credit-card.png";
import classes from "./CreditCardIcon.module.css";

const CreditCardIcon = () => {
  return (
    <img
      src={CardIcon}
      className={classes["card-icon"]}
      alt="credit card"
    ></img>
  );
};

export default CreditCardIcon;
