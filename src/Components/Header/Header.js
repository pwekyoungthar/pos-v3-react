import Brand from "./Brand";
import SearchInput from "./SearchInput";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Header.module.css";
const Header = (props) => {
  const newItemBtnHandler = () => {
    props.onTrueOverlay(true);
  };
  const profileShortDetailHandler = () =>{
    props.onTrueOverlay(!props.userProfileToggle);
  }
  return (
    <header className={classes.header}>
      <Brand />
      <SearchInput />
      <Button
        className={`${classes.btn} ${classes["newItem-btn"]}`}
        onClick={newItemBtnHandler}
      >
        New Item
      </Button>
      {/* <button className="btn newItem-btn">New Item</button> */}
      <div className={classes.profile} onClick={profileShortDetailHandler}>
        <img
          src="./img/profile.jpg"
          alt="Seller Profile"
          className={classes["profile-img"]}
        />
      </div>
    </header>
  );
};
export default Header;
