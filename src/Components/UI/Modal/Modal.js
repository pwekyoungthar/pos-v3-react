import Card from "../Card";
import NewItemForm from "./NewItemForm";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const newItemDataHandler = (e) => {
    props.onGetAllItems(e);
  };
  return (
    <Card className={classes["modal-box"]}>
      <ModalHeader />
      <NewItemForm onNewItemData={newItemDataHandler} />
      <ModalFooter />
    </Card>
  );
};

export default Modal;
