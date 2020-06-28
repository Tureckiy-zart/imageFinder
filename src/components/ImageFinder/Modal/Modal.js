import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal);
  }

  closeModal = (e) => {
    if (e.code === "Escape" || e.keyCode === 32) {
      this.props.onCloseModal();
    }
  };

  //   nextImg = (e) => {
  //     if (e.keyCode === 37) {
  //       this.props.onCloseModal();
  //     }
  //   };

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.largeImg} alt="" />
          <button
            className={styles.CloseModalBtn}
            type="button"
            onClick={() => this.props.onCloseModal()}
          >X</button>
        </div>
      </div>
    );
  }
}

export default Modal;
