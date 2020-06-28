import styles from "../../../styles2.css";

// import React from "react";

// const Searchbar = ({ onHandleChange }, { onSubmit }, qwery, search) => {
//   return (
//     <header className="Searchbar">
//       <form className="SearchForm" onSubmit={onSubmit}>
//         <button type="submit" className="SearchForm-button">
//           <span className="SearchForm-button-label">Search</span>
//         </button>

//         <input
//           onChange={onHandleChange}
//           className="SearchForm-input"
//           type="text"
//           // value={qwery}
//           value={search}
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };

// export default Searchbar;

// ===========================Works=================================

import React, { Component } from "react";
class Searchbar extends Component {
  state = {
    qwery: "",
  };

  handleChange = ({ target: { value } }) => this.setState({ qwery: value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.qwery);
    this.setState({ qwery: "" });
  };
  render() {
    const { qwery } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          {/* <form className="SearchForm" onClick={this.props.xxx}> */}
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            value={qwery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
