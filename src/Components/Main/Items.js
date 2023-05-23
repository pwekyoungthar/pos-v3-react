import SingleItem from "./SingleItem";

const Items = (props) => {
  const cartItemDataHandler = (e) => {
    props.onGetCartItemObj(e);
    // console.log(e);
  };
  return (
    <>
      {props.itemList.map((item) => (
        <SingleItem
          key={item.itemId}
          itemId={item.itemId}
          itemName={item.itemName}
          itemPrice={item.itemPrice}
          itemCat={item.itemCat}
          onGetCartItemData={cartItemDataHandler}
        />
      ))}
    </>
  );
};
export default Items;
