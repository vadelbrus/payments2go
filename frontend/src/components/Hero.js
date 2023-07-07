import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
import CartIcons from "./CartIcons";
import CreditCardIcon from "./CreditCard";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <Wrapper>
      <div className={classes["hero"]}>
        <h1 className={classes["hero-title"]}>Welcome to Payments2go API</h1>
        <Card>
          <div className={classes["hero-wrapper"]}>
            <div className={classes["hero-images"]}>
              <CartIcons />
              <CreditCardIcon />
            </div>
            <p className={classes["hero-description"]}>
              If you need to work with payments data you can use this API to
              create your own awesome projects
            </p>
          </div>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Hero;
