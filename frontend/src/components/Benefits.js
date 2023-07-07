import Card from "../UI/Card";
import classes from "./Benefits.module.css";
import BenefitsImage from "./../assets/dollar.png";
import Wrapper from "../UI/Wrapper";

const Benefits = () => {
  return (
    <Wrapper>
      <div className={classes.benefits}>
        <h2 className={classes["benefits-title"]}>
          What are benefits from using Payment2go API?
        </h2>
        <Card>
          <div className={classes["benefits-wrapper"]}>
            <img
              src={BenefitsImage}
              className={classes["benefits-img"]}
              alt="monitor full of dolars"
            ></img>
            <ul className={classes.list}>
              <li className={classes["list-item"]}>it’s totally free</li>
              <li className={classes["list-item"]}>manage real payment data</li>
              <li className={classes["list-item"]}>
                test your front-end application with ease
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Benefits;
