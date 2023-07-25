import { useState } from "react";
import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
import TabsList from "./Actions/TabsList";
import classes from "./PlaygroundBoard.module.css";

const PlaygroundBoard = () => {
  return (
    <>
      <Wrapper>
        <h1 className={classes["board-title"]}>Playground</h1>
        <Card>
          <div className={classes["board-wrapper"]}>
            <div>
              <TabsList />
              <div className={classes["board-output"]}></div>
            </div>
          </div>
        </Card>
      </Wrapper>
    </>
  );
};

export default PlaygroundBoard;
