import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
import classes from "./RoutesShowcase.module.css";
import RoutesImg from "./../assets/routes.png";

const RoutesShowcase = () => {
  return (
    <Wrapper>
      <h2 className={classes["routes-title"]}>Routes</h2>
      <Card>
        <div className={"routes-wrapper"}>
          <img
            src={RoutesImg}
            alt="computer cable representing routes"
            className={classes["routes-image"]}
          ></img>
          <p className={classes["routes-methodsTitle"]}>
            API supports all following HTTP methods
          </p>
          <ul className={classes["routes-list"]}>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Get</span>
              <span>/cards</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Get</span>
              <span>/cards/id=1</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Patch</span>
              <span>/users</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Get</span>
              <span>/users</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Get</span>
              <span>/user/userId=1</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Get</span>
              <span>/payments</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Get</span>
              <span>/payments/paymentId</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}> Post</span>
              <span>/payments</span>
            </li>
            <li className={classes["routes-listItem"]}>
              <span className={classes["routes-method"]}>Delete</span>
              <span>/payments/paymentId</span>
            </li>
          </ul>
        </div>
      </Card>
    </Wrapper>
  );
};

export default RoutesShowcase;
