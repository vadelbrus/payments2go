import classes from "./Footer.module.css";
import githubImage from "../assets/github.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2 className={classes["footer-title"]}>See you on github!</h2>
      <img src={githubImage} className={classes["footer-image"]}></img>
    </footer>
  );
};

export default Footer;
