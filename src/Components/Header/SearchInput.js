import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchInput.module.css";
const SearchInput = (props) => {
  return (
    <form action="#">
      <input
        type="text"
        placeholder="Search Item"
        className={classes.search_input}
      />
      <Button className={`${classes.btn} ${classes["search-btn"]}`}>
        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
      </Button>
    </form>
  );
};
export default SearchInput;
