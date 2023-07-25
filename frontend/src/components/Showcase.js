import Card from "../UI/Card";
import Input from "../UI/Input";
import classes from "./Showcase.module.css";
import LaunchImage from "./../assets/launch.png";
import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";

const Showcase = () => {
  const getResource = (e) => {
    console.log(e);
    console.log("Fetching...");
  };
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
              <Button
                action="GET"
                type="button"
                onClickHandler={getResource}
                children="GET"
                padding="8px"
                border="none"
                color="#f1f4f1"
                bgColor={"rgba(255, 79, 25, 0.7)"}
                handleMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 79, 25, 0.5)";
                }}
                handleMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 79, 25, 0.7)";
                }}
                transition="background-color .3s ease"
                fontWeight="500"
                fontSize="12px"
                cursor="pointer"
              />
              <div className={classes["showcase-inner"]}>
                <label className={classes["showcase-label"]}>/payments/</label>
                <Input
                  apiLink="12345"
                  width="60px"
                  backgroundColor="#f1f4f1"
                  border="none"
                  fontSize="14px"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Showcase;
