import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import classes from "./Brand.module.css";
const Brand = () => {
  const title = "MY POS";
  return (
    <Card className={classes.logo}>
      <FontAwesomeIcon icon={faAppleAlt} className={classes["logo-icon"]} />
      <h2 className={classes.title}>{title}</h2>
    </Card>
  );
};
export default Brand;
