import classes from "./PatchMethodsTab.module.css";

const PatchMethodsTab = () => {
  const fetchText = `('https://payments2go.com/payments/')
  .then(res=>res.json())
  .then(json=>console.log(json))`;

  const outputText = `
    {
      id:3, 
      title:'...', 
      price:'...', 
      category:'...', 
      description:'...', 
      image:'...' 
      }
`;
  return (
    <>
      <div>
        <p className={classes["methods-demoTitle"]}>Patch payment</p>
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

export default PatchMethodsTab;
