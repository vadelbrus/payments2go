import classes from "./../components/CartIcons.module.css";
import BroccoliImg from "./../assets/broccoli.png";
import CakeImg from "./../assets/small-cake.png";
import BottleImg from "./../assets/bottle.png";
import CartImg from "./../assets/cart.png";

const CartIcons = () => {
  return (
    <div className={classes.icons}>
      <div className={classes["icon-group"]}>
        <img src={BroccoliImg} className={classes["icon-sm"]} alt=""></img>
        <img src={CakeImg} className={classes["icon-sm"]} alt=""></img>
        <img src={BottleImg} className={classes["icon-sm"]} alt=""></img>
      </div>
      <img src={CartImg} className={classes["icon-cart"]} alt=""></img>
    </div>
  );
};

export default CartIcons;
