import React, { Component } from "react";
import { fetchData } from "./services/services";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "react-loader-spinner";
// import sytles from '../../styles2.css'

class DashBoard extends Component {
  state = {
    items: [],
    qwery: "vishnu",
    page: 1,
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetcher();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.qwery !== this.state.qwery) {
      this.fetcher();
    }
    if (prevState.page !== this.state.page) {
      this.loadMore();
    }
    scroll()
  }
  addState = async (searchQery) => await this.setState({ qwery: searchQery });

  loadMore = async () => {
    const { page, qwery } = this.state;
    const result = await fetchData(qwery, page);
    this.setState((prevPage) => ({
      items: [...prevPage.items, ...result],
    }));
  };
  // xxx=(evt)=>{
  //   evt.preventDefault()
  //   const qwery = evt.currentTarget.elements[1].value;
  // }

  upPage = () => this.setState({ page: this.state.page + 1 });

  fetcher = async () => {
    const { page, qwery } = this.state;
    try {
      const result = await fetchData(qwery, page);
      this.setState({ items: result, page: 1 });
      return result;
    } catch (error) {
      this.setState({ error });
      console.log("ERROR", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  scroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { items, isLoading } = this.state;
    return (
      <>
        {/* {items.length > 0 && <Button onClickLoadMore={this.loadMore} />} */}
        {items.length > 0 && <Button onClickLoadMore={this.upPage} />}
        <Searchbar onSubmit={this.addState} />
        {isLoading ? <Loader /> : <ImageGallery data={items} />}
      </>
    );
  }
}

export default DashBoard;
