import SingleCartItem from "./SingleCartItem";
const CartItem = (props) => {
  return (
    <>
      {props.cartItems.map((item) => (
        <SingleCartItem cartItem={item} key={item.itemId} />
      ))}
    </>
  );
};
export default CartItem;
