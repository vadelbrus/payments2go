import classes from "./GetMethodsTab.module.css";

const GetMethodsTab = () => {
  const fetchText = `('https://payments2go.com/payments/1')
  .then(res=>res.json())
  .then(json=>console.log(json))`;

  const outputText = `{
id:1, 
title:'...', 
price:'...', 
category:'...', 
description:'...', 
image:'...' 
}`;
  return (
    <>
      <div>
        <p className={classes["methods-demoTitle"]}>Get one payment</p>
        <pre>
          <span className={classes["methods-fetchText"]}>fetch</span>
          <code>{fetchText}</code>
        </pre>
      </div>
      <div>
        <p className={classes["methods-outputTitle"]}>Output</p>
        <pre className={classes["methods-outputText"]}>
          <code className={classes["methods-text"]}> {outputText}</code>
        </pre>
      </div>
    </>
  );
};

export default GetMethodsTab;
