import Button from "../../UI/Button";
import classes from "./GetallTab.module.css";

const GetallTab = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["input-wrapper"]}>
        <pre className={classes["fetch-wrapper"]}>
          <code className={classes["fetch-link"]}>
            http://localhost:3000/playground/
          </code>
        </pre>

        <Button
          action="GETALL"
          type="button"
          onClickHandler={() => console.log("GETALL")}
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

export default GetallTab;
