import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./SingleItem.module.css";
const SingleItem = (props) => {
  const cartItemHandler = () => {
    const cartItem = {
      itemId: props.itemId,
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      count: 1,
    };
    props.onGetCartItemData(cartItem);
  };
  return (
    <div className={classes["left-section-item"]}>
      <ul>
        <li>{props.itemName}</li>

        <li>- {props.itemPrice} MMK</li>
        <li onClick={cartItemHandler}>
          <FontAwesomeIcon icon={faCartShopping} />
        </li>
      </ul>
    </div>
  );
};
export default SingleItem;
