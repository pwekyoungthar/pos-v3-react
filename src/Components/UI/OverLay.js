import classes from "./Overlay.module.css";
const Overlay = (props) => {
  const removeOverLayHandler = () => {
    props.onFalseOverlay(false);
  };
  return (
    <div className={classes["back-drop"]} onClick={removeOverLayHandler}></div>
  );
};
export default Overlay;
