import React from "react";
import "./myStylesheet.css";
import styles from "./styles.module.css";

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  const inline = {
    color: "blue",
  };
  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheet</h1>
      <h1 style={inline}>Inline Styling</h1>
      <h1 className="regular">Regular Stylesheet</h1>
      <h1 className={styles.module}>Module Stylesheet</h1>
    </div>
  );
}

export default StyleSheet;
