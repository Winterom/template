import styles from "./Hamburger.module.css";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSideBarState, switchState} from "../../layout/slice/SideBarToggleSlice";
type HamburgerProps={
    onEvent?: (event: MouseEvent) => {
    };
}
const Hamburger : FC<HamburgerProps> =()=>{
    const isOpen = useSelector(selectSideBarState)
    const dispatch = useDispatch();
    return(
        <div className={styles.Hamburger}>
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
        </div>
    );
}
export {Hamburger}