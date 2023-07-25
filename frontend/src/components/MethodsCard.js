import { useState } from "react";
import Tabs from "./Actions/Tabs";
import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
// import TabsList from "./Actions/TabsList";
// import Button from "../UI/Button";
import GetMethodsTab from "../components/MethodsTabs/GetMethodsTab";
import GetalltMethodsTab from "../components/MethodsTabs/GetallMethodsTab";
import CreateMethodsTab from "../components/MethodsTabs/CreateMethodsTab";
import PatchMethodsTab from "../components/MethodsTabs/PatchMethodsTab";
import DeleteMethodsTab from "../components/MethodsTabs/DeleteMethodsTab";
import classes from "./MethodsCard.module.css";

const MethodsCard = (props) => {
  const [tabState, setTabState] = useState(1);

  const toggleTab = (index) => {
    setTabState(index);
  };

  return (
    <Wrapper>
      <h1 className={classes["methods-title"]}>Supported Http Methods</h1>
      <Card>
        <div className={classes["methods-container"]}>
          {/* <TabsList /> */}
          <Tabs onTabChange={toggleTab} activeTab={tabState} />
          <div className={classes["methods-demoWrapper"]}>
            {tabState === 1 && <GetMethodsTab />}
            {tabState === 2 && <GetalltMethodsTab />}
            {tabState === 3 && <CreateMethodsTab />}
            {tabState === 4 && <PatchMethodsTab />}
            {tabState === 5 && <DeleteMethodsTab />}
          </div>
        </div>
      </Card>
    </Wrapper>
  );
};

export default MethodsCard;
