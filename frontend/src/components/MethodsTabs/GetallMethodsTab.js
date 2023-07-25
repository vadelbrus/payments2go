import classes from "./GetalltMethodsTab.module.css";

const GetalltMethodsTab = () => {
  const fetchText = `('https://payments2go.com/payments/')
  .then(res=>res.json())
  .then(json=>console.log(json))`;

  const outputText = `








  

  {
  id:1, 
  title:'...', 
  price:'...', 
  category:'...', 
  description:'...', 
  image:'...' 
  },
  {
    id:2, 
    title:'...', 
    price:'...', 
    category:'...', 
    description:'...', 
    image:'...' 
    },
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
        <p className={classes["methods-demoTitle"]}>Get all payments</p>
        <pre>
          <span className={classes["methods-fetchText"]}>fetch</span>
          <code>{fetchText}</code>
        </pre>
      </div>
      <div>
        <p className={classes["methods-outputTitle"]}>Output</p>
        <pre className={classes["methods-outputText"]}>
          <code> {outputText}</code>
        </pre>
      </div>
    </>
  );
};

export default GetalltMethodsTab;
