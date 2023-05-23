import classes from "./ModalHeader.module.css";
import Card from "../Card";
const ModalHeader = (props) => {
  return (
    <Card className={classes["modal-header"]}>
      <h2>New Item</h2>
    </Card>
  );
};
export default ModalHeader;
