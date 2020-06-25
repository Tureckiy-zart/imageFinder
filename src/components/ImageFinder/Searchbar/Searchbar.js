import styles from "../../../styles2.css";

import React, { Component } from "react";
class Searchbar extends Component {
  state = { qwery: "" };

  handleChange = ({ target: { value } }) => {
    this.setState({ qwery: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.qwery);
  };
  render() {
    const { qwery } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onClick={this.handleSubmit}>
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
        <p>{this.state.qwery}</p>
      </header>
    );
  }
}

export default Searchbar;
