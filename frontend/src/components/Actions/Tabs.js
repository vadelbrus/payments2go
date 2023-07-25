import Button from "../../UI/Button";
import classes from "./TabsList.module.css";
// import btnclasses from "../../UI/Button.module.css";

const Tabs = (props) => {
  return (
    <ul className={classes["list"]}>
      <li>
        <Button
          action="GET"
          type="button"
          onClickHandler={() => props.onTabChange(1)}
          children="GET"
          padding="8px"
          border="none"
          color="#5d647f"
          bgColor={props.activeTab === 1 ? "rgba(255, 79, 25, 0.7)" : "#f1f4f1"}
          handleMouseEnter={(e) => {
            // e.target.style.background = "rgba(255, 79, 25, 0.5)";
            props.activeTab === 1
              ? (e.target.style.background = "rgba(255, 79, 25, 0.7)")
              : (e.target.style.background = "rgba(255, 79, 25, 0.5)");
          }}
          handleMouseLeave={(e) => {
            props.activeTab === 1
              ? (e.target.style.background = "rgba(255, 79, 25, 0.7)")
              : (e.target.style.background = "#f1f4f1");
          }}
          transition="background-color .3s ease"
          fontWeight="500"
          fontSize="12px"
          cursor="pointer"
        />
      </li>

      <li>
        <Button
          action="GETALL"
          type="button"
          onClickHandler={() => props.onTabChange(2)}
          children="GETALL"
          padding="8px"
          border="none"
          color="#5d647f"
          bgColor={props.activeTab === 2 ? "rgba(255, 79, 25, 0.7)" : "#f1f4f1"}
          className
          handleMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 79, 25, 0.5)";
          }}
          handleMouseLeave={(e) => {
            props.activeTab === 2
              ? (e.target.style.background = "rgba(255, 79, 25, 0.7)")
              : (e.target.style.background = "#f1f4f1");
          }}
          transition="background-color .3s ease"
          fontWeight="500"
          fontSize="12px"
          cursor="pointer"
        />
      </li>
      <li>
        <Button
          action="CREATE"
          type="button"
          onClickHandler={() => props.onTabChange(3)}
          handleMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 79, 25, 0.5)";
          }}
          handleMouseLeave={(e) => {
            props.activeTab === 3
              ? (e.target.style.background = "rgba(255, 79, 25, 0.7)")
              : (e.target.style.background = "#f1f4f1");
          }}
          transition="background-color .3s ease"
          children="CREATE"
          padding="8px"
          border="none"
          color="#5d647f"
          bgColor={props.activeTab === 3 ? "rgba(255, 79, 25, 0.7)" : "#f1f4f1"}
          fontWeight="500"
          fontSize="12px"
          cursor="pointer"
        />
      </li>
      <li>
        <Button
          action="PATCH"
          type="button"
          onClickHandler={() => props.onTabChange(4)}
          children="PATCH"
          padding="8px"
          border="none"
          color="#5d647f"
          bgColor={props.activeTab === 4 ? "rgba(255, 79, 25, 0.7)" : "#f1f4f1"}
          handleMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 79, 25, 0.5)";
          }}
          handleMouseLeave={(e) => {
            props.activeTab === 4
              ? (e.target.style.background = "rgba(255, 79, 25, 0.7)")
              : (e.target.style.background = "#f1f4f1");
          }}
          transition="background-color .3s ease"
          fontWeight="500"
          fontSize="12px"
          cursor="pointer"
        />
      </li>
      <li>
        <Button
          action="DELETE"
          type="button"
          onClickHandler={() => props.onTabChange(5)}
          children="DELETE"
          padding="8px"
          border="none"
          color="#5d647f"
          height="32px"
          bgColor={props.activeTab === 5 ? "rgba(255, 79, 25, 0.7)" : "#f1f4f1"}
          handleMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 79, 25, 0.5)";
          }}
          handleMouseLeave={(e) => {
            props.activeTab === 5
              ? (e.target.style.background = "rgba(255, 79, 25, 0.7)")
              : (e.target.style.background = "#f1f4f1");
          }}
          transition="background-color .3s ease"
          fontWeight="500"
          fontSize="12px"
          cursor="pointer"
        />
      </li>
    </ul>
  );
};

export default Tabs;
