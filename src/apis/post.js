import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  // headers: {
  //   Authorization: 'Bearer ',
  // },
});

// export default axios.create({
//   baseURL: `https://api.yelp.com/v3/businesses`,
//   headers: {
//     Authorization:
//       'Bearer jo4GWNA0HuMR6YXGFw_XnHbbrvEL-Zy5H5_BRJVYGJdcDh0Zqkjnt4gEXOJHKFfKHuvWB84or60Lu-SUTcc3iCiZvIAELTU2suXBzvNaJ_rnRpkUWDnYrpFWdqw3YXYx',
//   },
// });
