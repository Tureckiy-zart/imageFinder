import React, { Component } from "react";
import { fetchData } from "./services/services";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "react-loader-spinner";
// import sytles from '../../styles2.css'

class DashBoard extends Component {
  state = {
    items: [
      {
        comments: 28,
        downloads: 8662,
        favorites: 33,
        id: 5319835,
        imageHeight: 2811,
        imageSize: 3199811,
        imageWidth: 4217,
        largeImageURL:
          "https://pixabay.com/get/53e3d44a4251a914f6da8c7dda793678123adced52526c48702679dd9549c051bb_1280.jpg",
        likes: 55,
        pageURL:
          "https://pixabay.com/photos/scenery-moon-sky-town-night-city-5319835/",
        previewHeight: 100,
        previewURL:
          "https://cdn.pixabay.com/photo/2020/06/20/06/34/scenery-5319835_150.jpg",
        previewWidth: 150,
        tags: "scenery, moon, sky",
        type: "photo",
        user: "Syaibatulhamdi",
        userImageURL:
          "https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg",
        user_id: 13452116,
        views: 9892,
        webformatHeight: 427,
        webformatURL:
          "https://pixabay.com/get/53e3d44a4251a914f1dc846096293179103dd6e4504c704c7c2d72d69f4cc459_640.jpg",
        webformatWidth: 640,
      },
      {
        comments: 28,
        downloads: 8662,
        favorites: 33,
        id: 53123423429835,
        imageHeight: 2811,
        imageSize: 3199811,
        imageWidth: 4217,
        largeImageURL:
          "https://pixabay.com/get/53e3d44a4251a914f6da8c7dda793678123adced52526c48702679dd9549c051bb_1280.jpg",
        likes: 55,
        pageURL:
          "https://pixabay.com/photos/scenery-moon-sky-town-night-city-5319835/",
        previewHeight: 100,
        previewURL:
          "https://cdn.pixabay.com/photo/2020/06/20/06/34/scenery-5319835_150.jpg",
        previewWidth: 150,
        tags: "scenery, moon, sky",
        type: "photo",
        user: "Syaibatulhamdi",
        userImageURL:
          "https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg",
        user_id: 13452234234116,
        views: 9892,
        webformatHeight: 427,
        webformatURL:
          "https://pixabay.com/get/53e3d44a4251a914f1dc846096293179103dd6e4504c704c7c2d72d69348cc5b_640.jpg",
        webformatWidth: 640,
      },
      {
        comments: 28,
        downloads: 8662,
        favorites: 33,
        id: 5315675675679835,
        imageHeight: 2811,
        imageSize: 3199811,
        imageWidth: 4217,
        largeImageURL:
          "https://pixabay.com/get/53e3d44a4251a914f6da8c7dda793678123adced52526c48702679dd9549c051bb_1280.jpg",
        likes: 55,
        pageURL:
          "https://pixabay.com/photos/scenery-moon-sky-town-night-city-5319835/",
        previewHeight: 100,
        previewURL:
          "https://cdn.pixabay.com/photo/2020/06/20/06/34/scenery-5319835_150.jpg",
        previewWidth: 150,
        tags: "scenery, moon, sky",
        type: "photo",
        user: "Syaibatulhamdi",
        userImageURL:
          "https://cdn.pixabay.com/user/2020/01/29/07-13-31-807_250x250.jpg",
        user_id: 13452116,
        views: 9892,
        webformatHeight: 427,
        webformatURL:
          "https://pixabay.com/get/53e3d44a4251a914f1dc846096293179103dd6e4504c704c7c2d72d69348cc5b_640.jpg",
        webformatWidth: 640,
      },
    ],
    qwery: "cat",
    page: 1,
    isLoading: true,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    // this.fetcher();
    this.loadMore();
  }

      addState = async (searchQery) => {
        await this.setState({ qwery: searchQery });
        await this.fetcher();
      };

  loadMore = async () => {
    const { page, qwery } = this.state;
    console.log('page', page)
    try {
      const result = await fetchData(qwery, page);
      this.setState((prevPage) => ({
        items: [...prevPage.items, ...result],
        page: prevPage.page + 1,
      }));
    } catch (error) {
      console.log(error);
    }
    finally {
      this.setState({ isLoading: false });
    }
  
  };
  // addState = async (searchQery) => {
  //   console.log("searchQery", searchQery);
  //   await this.setState({ qwery: searchQery });
  //    this.fetcher(searchQery);
  // };

  fetcher = async () => {
    const { page, qwery } = this.state;

    try {
      const result = await fetchData(qwery, page);
      this.setState({ items: result, page: 1 });
      return result;
    } catch (error) {
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
    // console.log("this.state.page", this.state.page);
    // console.log("qwery AFET RENDER", this.state.qwery);
    const { items, isLoading } = this.state;
    console.log("this.state.qwery", this.state.items);
    return (
      <>
        {items.length > 0 && <Button onClickLoadMore={this.loadMore} />}
        <Searchbar
          onSubmit={this.addState}
          qwery={this.state.qwery}
          page={this.state.page}
        />
        {isLoading ? <Loader /> : <ImageGallery data={items} />}
      </>
    );
  }
}

export default DashBoard;
