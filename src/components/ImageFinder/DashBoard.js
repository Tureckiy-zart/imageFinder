import React, { Component } from "react";
import { fetchData } from "./services/services";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "react-loader-spinner";
import Modal from "./Modal/Modal";
// import sytles from '../../styles2.css'
class DashBoard extends Component {
  state = {
    items: [],
    qwery: "cat",
    search: "",
    page: 1,
    isLoading: true,
    largeImg: null,
    error: null,
    btnName: ["Load"],
  };
  search = {
    search: "loooooooooooool",
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
    if (prevState.items !== this.state.items) {
      this.scroll();
    }
  }

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
  upPage = () => this.setState({ page: this.state.page + 1 });
  scroll = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  addState = async (searchQery) => await this.setState({ qwery: searchQery });
  // ============SEARCH BAR=======================
  // handleChange = ({ target: { value } }) => this.setState({ qwery: value });

  // handleChange = ({target: {value}}) => {

  //   console.log('e.target.value', value)
  //   return this.search.search = value
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("111111111", 111111111);
  //   console.log("e", e);
  //   // this.addState(this.this.state.search);
  //   // this.setState({ qwery: "" });
  // };
  // ============================================

  // ===========Modal=============================

  getLargeImageUrl = (largeImageURL) => {
    this.setState({ largeImg: largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  render() {
    const { items, isLoading, largeImg, qwery, search } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.addState} />
        {/* <Searchbar
          onHandleChange={this.handleChange}
          onSubmit={this.handleSubmit}
          search={this.search.search}
        /> */}

        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            data={items}
            onGetLargeImageUrl={this.getLargeImageUrl}
          />
        )}
        {items.length >= 12 && (
          <Button
            onClickLoadMore={this.upPage}
            // btnName={"Load More"}
            // buttonName={this.state.btnName[0]}
          />
        )}

        {largeImg && (
          <Modal onCloseModal={this.closeModal} largeImg={largeImg} />
        )}
      </>
    );
  }
}

export default DashBoard;
