import css from "./LogOutModal.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/user/userOperations";
import { ModalBtn } from "../ModalBtn/Modalbtn";
import { onLogoutUser } from "../../redux/user/userSlice";

export const LogOutModal = ({ onRequestClose }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logoutUser());
    dispatch(onLogoutUser());
  };

  return (
    <>
      <p className={css.text}>Do you really want to leave?</p>
      <div className={css.box}>
        <ModalBtn text={"Log out"} onClick={onLogOut}></ModalBtn>
        <ModalBtn text={"Cancel"} onClick={onRequestClose}></ModalBtn>
      </div>
    </>
  );
};
