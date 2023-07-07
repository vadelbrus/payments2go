import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
import portsImage from "./../assets/ports.png";
import classes from "./Resources.module.css";

const Resources = () => {
  return (
    <Wrapper>
      <div className={classes.resources}>
        <h2 className={classes["resources-title"]}>Resources </h2>
        <Card>
          <div className={classes["resources-wrapper"]}>
            <img
              src={portsImage}
              alt="computer ports"
              className={classes["resources-image"]}
            ></img>
            <p className={classes["resources-description"]}>
              This API gives you an access to the following 4 resources:
            </p>
            <ul className={classes["resources-list"]}>
              <li>/cards</li>
              <li>/users</li>
              <li>/payments</li>
              <li>/items</li>
            </ul>
          </div>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Resources;
