import axios from "axios";
const API_KEY = "16752813-8ad3a541d9a85fd347d38c131";
// const API_KEY = "17180495-3d34df8d888cadeffbb6cce8d"; ///work
const BASE_URL = (qwery, pageNum) =>
  `https://pixabay.com/api/?q=${qwery}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

const mapper = (data) =>
  data.map(({ previewURL: smallImg, largeImageURL: largeImg, ...restProps }) => ({smallImg, largeImg, ...restProps}));

export const fetchData = async (qwery, pageNum) => {
  const data = await axios.get(BASE_URL(qwery = "Kiev", pageNum=2));
  return data;
};

























// const baseUrl = 'https://pixabay.com/api/';
// const API_KEY = '16013941-0b7abfb5c3f07bad798dbf718';

// const fetchImages = (query = '', page = 1) =>
//   axios.get(
//     `${baseUrl}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
//   );

// export default fetchImages;
