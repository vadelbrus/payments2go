import Button from "../../UI/Button";
import classes from "./GetallTab.module.css";

const CreateTab = (props) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["input-wrapper"]}>
        <div className={classes["controll"]}>
          <label for="users">Select card User</label>
          <select name="users">
            <option value="Lucas">Lucas</option>
            <option value="Tom">Tom</option>
            <option value="Jerry">Jerry</option>
          </select>
        </div>
        <div className={classes["controll"]}>
          <label for="products">Add product</label>
          <select name="products">
            <option value="Potato">Potato</option>
            <option value="Oranges">Oranges</option>
            <option value="Laptop">Laptop</option>
          </select>
        </div>
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

export default CreateTab;
