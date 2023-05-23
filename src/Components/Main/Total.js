import Card from "../UI/Card";
import classes from "./Total.module.css";
const Total = (props) => {
  return (
    <Card className={classes["right-section-bottom"]}>
      <span>Total Amount : </span>
      <span>{props.totalAmount} </span>
      <span> - MMK</span>
      <button className={classes["btn-buy"]}>Buy</button>
    </Card>
  );
};
export default Total;
