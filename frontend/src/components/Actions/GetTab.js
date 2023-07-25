import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./GetTab.module.css";
import inputClasses from "../../UI/Input.module.css";

const GetTab = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["input-wrapper"]}>
        <pre className={classes["fetch-wrapper"]}>
          <code className={classes["fetch-link"]}>
            http://localhost:3000/playground/
            <Input
              width="28px"
              backgroundColor="#f1f4f1"
              border="none"
              fontSize="10px"
              fontWeight="300"
              placeholder="123"
              inputClasses={inputClasses}
            />
          </code>
        </pre>

        <Button
          action="GET"
          type="button"
          onClickHandler={() => console.log("GET")}
          children="OK"
          width="30px"
          height="25px"
          padding="4px"
          border="0"
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
      </div>
    </div>
  );
};

export default GetTab;
