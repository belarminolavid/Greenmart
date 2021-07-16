import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios 
    .get(productsAPI)
    .then( res => {
      let  {products}  = res.data;
      // console.log(res.data)
      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      alert(err);
      console.log(err);
    });
};
