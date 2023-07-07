import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/docs" className={`${classes.link} ${classes.docs}`}>
        Docs
      </Link>
      <Link to="/" className={classes.link}>
        <h1 className={classes["header-title"]}>Payments2go</h1>
      </Link>
      <button className={classes.nav}>
        <span className={classes["nav-bar"]}></span>
        <span className={classes["nav-bar"]}></span>
      </button>
    </div>
  );
};

export default Header;
