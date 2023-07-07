import Card from "../UI/Card";
import Button from "../UI/Button";
import ShowcaseInput from "./ShowcaseInput";
import classes from "./Showcase.module.css";
import LaunchImage from "./../assets/launch.png";
import Wrapper from "../UI/Wrapper";

const Showcase = () => {
  return (
    <Wrapper>
      <div className={classes.showcase}>
        <h2 className={classes["showcase-title"]}>Let’s try it! </h2>
        <Card>
          <div className={classes["showcase-wrapper"]}>
            <img
              src={LaunchImage}
              className={classes["showcase-img"]}
              alt="setting off rocket"
            ></img>

            <div className={classes["showcase-action"]}>
              <Button title="get" type="submit" isActive={true} />
              <div className={classes["showcase-inner"]}>
                <label className={classes["showcase-label"]}>/payments/</label>
                <ShowcaseInput apiLink="12345" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Showcase;
