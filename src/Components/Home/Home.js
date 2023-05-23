import ReactDOM from "react-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Overlay from "../UI/OverLay";
import Modal from "../UI/Modal/Modal";
import UserShortData from "../UserData/UserShortData";
import { useState } from "react";
function Home(props) {
  const [overlay, setOverlay] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [userDataOverlay,setUserDataOverlay] = useState(false);
  const overlayTrueState = (e) => {
    setOverlay(e);
  };
  const overlayFalseState = (e) => {
    setOverlay(e);
  };
  const allItemHander = (e) => {
    setItemList((prevItems) => [e, ...prevItems]);
  };

  const userOverlayStateHandler = e => {
    setUserDataOverlay(e);
  }

  return (
    <>
      {overlay
        ? ReactDOM.createPortal(
            <Overlay onFalseOverlay={overlayFalseState} />,
            document.getElementById("overlay")
          )
        : ""}
      {overlay
        ? ReactDOM.createPortal(
            <Modal onGetAllItems={allItemHander} />,
            document.getElementById("overlay")
          )
        : ""}
    {userDataOverlay === true ? <UserShortData userData={props.useData}/> : ''}
      
      <Header onTrueOverlay={userOverlayStateHandler} userProfileToggle={userDataOverlay}/>
      <Main itemList={itemList} />
    </>
  );
}

export default Home;
