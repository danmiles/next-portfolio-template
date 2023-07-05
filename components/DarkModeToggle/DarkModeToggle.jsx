"use client"

import React, { useContext } from "react";
import styles from "@styles/DarkModeToggle.module.css";
import { ThemeContext } from "./ThemeContext";

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.toggle} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
