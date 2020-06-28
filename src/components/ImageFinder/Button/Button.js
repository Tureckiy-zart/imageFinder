import React from "react";
import styles from './button.module.css';

const Button = ({ onClickLoadMore }, { btnName }, buttonName) => {
  // console.log('buttonName', buttonName)
  // console.log('btnName', btnName)
  return (
    <button className={styles.Button} type="button" onClick={onClickLoadMore}>
      THIS GARBAGE DON`T WORKS WITH PROPS!!!!!!! {buttonName}
    </button>
  );
};

export default Button;
