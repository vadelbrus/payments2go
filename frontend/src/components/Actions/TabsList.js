import { useState } from "react";
import Button from "../../UI/Button";
import classes from "./TabsList.module.css";
// import btnclasses from "../../UI/Button.module.css";
import Tabs from "./Tabs";
import GetTab from "./GetTab";
import GetallTab from "./GetallTab";
import CreateTab from "./CreateTab";
import DeleteTab from "./DeleteTab";
import PatchTab from "./PatchTab";

const TabsList = (props) => {
  const [tabState, setTabState] = useState(1);

  const toggleTab = (index) => {
    setTabState(index);
  };

  return (
    <>
      <Tabs onTabChange={toggleTab} activeTab={tabState} />
      <div className={classes["tabs-content"]}>
        {tabState === 1 && <GetTab />}
        {tabState === 2 && <GetallTab />}
        {tabState === 3 && <CreateTab />}
        {tabState === 4 && <DeleteTab />}
        {tabState === 5 && <PatchTab />}
      </div>
    </>
  );
};

export default TabsList;
