import Card from "../UI/Card";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./SingleCartItem.module.css";
const SingleCartItem = (props) => {
  return (
    <div className={classes["cart-item"]}>
      <ul className={classes["item-info"]}>
        <li>{props.cartItem.itemName}</li>
        <li>- {props.cartItem.itemPrice} MMK</li>
      </ul>
      <Card className={classes.count}>{props.cartItem.count}</Card>
      <Card className={classes["action-buttons"]}>
        <Button>+</Button>
        <Button>-</Button>
        <Button>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Card>
    </div>
  );
};
export default SingleCartItem;
