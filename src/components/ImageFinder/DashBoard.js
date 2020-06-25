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
    qwery: "",
    isLoading: true,
  };
  componentDidMount() {
    // this.setState({ isLoading: true });

    this.fetcher();
  }
  componentDidUpdate(xxx, prevState) {
    // console.log('prevState.items === this.state.items', this.state.items)
    // console.log(
    //   "tjis.state.items",
    //   this.state
    // );
    // this.fetcher()
    // console.log("prevState---length", prevState.items.length);
    // console.log("this.state.items.length", this.state.items.length);
    // console.log("xxx", xxx);
  }
  
  updateItems=(prevState)=>{
    (prevState.items.length !== this.state.items.length) && this.fetcher();

}

  addState = (searchQery) => {
    this.setState({ qwery: searchQery });
  };
  fetcher = async (pageNum = 2) => {
    try {
      const result = await fetchData(this.state.qwery, pageNum=5);
      const {data: { hits }} = result;
      console.log("hits", pageNum);
      this.setState({ items: hits });
      return hits;
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  loadMore = () => {
    console.log("object", 1111);
    // this.fetcher(this.state.qwery);
    // result = await fetchData(this.state.qwery, pageNum +1);
  };
  // window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  render() {
    const { items,isLoading } = this.state;
    // console.log("fetcher(this.state.qwery)", this.fetcher(this.state.qwery));
    console.log("this.state.qwery", this.state);
    return (
      // console.log('object', object)
      <>
        <Searchbar onSubmit={this.addState} />
        {isLoading ? <Loader/> : <ImageGallery data={items} />}
        
        {items.length > 0 && <Button onClickLoadMore={this.loadMore} />}
      </>
    );
  }
}

export default DashBoard;
