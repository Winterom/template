import React from 'react';
import {LeftSidebar} from "./LeftSidebar/LeftSidebar";
import {TopMenu} from "./TopMenu/TopMenu";
import {Outlet} from "react-router";
import styles from "./MainLayout.module.css";

const MainLayout = () =>{
    return (
        <div className={styles.container}>
            <LeftSidebar/>
            <div className={styles.rightPanel}>
                <TopMenu/>
                <div className={styles.content}>
                    <Outlet/>
                </div>

            </div>
        </div>
    );
}
export {MainLayout};