import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./MethodsCard.module.css";

const MethodsCard = (props) => {
  const fetchText = `fetch('https://payments2go.com/payments/1')
  .then(res=>res.json()) .then(json=>console.log(json))`;

  const outputText = `{
    id:1, title:'...', 
price:'...', 
category:'...', 
description:'...', 
image:'...' 
}`;

  return (
    <Wrapper>
      <h1 className={classes["methods-title"]}>Supported Http Methods</h1>
      <Card>
        <div className={classes["methods-container"]}>
          <ul className={classes["list"]}>
            <li>
              <Button title={"GET"} type="button" isActive={true} />
            </li>
            <li>
              <Button title={"GETALL"} type="button" isActive={false} />
            </li>
            <li>
              <Button title={"CREATE"} type="button" isActive={false} />
            </li>
            <li>
              <Button title={"PATCH"} type="button" isActive={false} />
            </li>
            <li>
              <Button title={"DELETE"} type="button" isActive={false} />
            </li>
          </ul>
          <div>
            <div>
              <p>Get one payment</p>
              <pre>{fetchText}</pre>
            </div>
            <div>
              <pre>{outputText}</pre>
            </div>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
};

export default MethodsCard;
