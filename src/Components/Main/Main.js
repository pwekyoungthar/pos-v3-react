import Card from "../UI/Card";
import Items from "./Items";
import CartItem from "./CartItem";
import Total from "./Total";
import classes from "./Main.module.css";
import { useState } from "react";
const Main = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const totalPriceArr = cartItems.map((item) => +item.itemPrice);
  const totalAmount = totalPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const cartItemObjHandler = (e) => {
    setCartItems((prevCartArr) => {
      return [e, ...prevCartArr];
    });
  };

  return (
    <main className={classes.main}>
      <div className={classes["left-section"]}>
        <Items
          itemList={props.itemList}
          onGetCartItemObj={cartItemObjHandler}
        />
      </div>
      <Card className={classes["right-section-top"]}>
        <CartItem cartItems={cartItems} />
      </Card>
      <Total totalAmount={totalAmount} />
    </main>
  );
};
export default Main;
