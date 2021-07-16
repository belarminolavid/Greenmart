import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, `BRL`);

  // let productInstallment;

  // if (!!product.installments) {
  //   const installmentPrice = product.price / product.installments;

  //   productInstallment = (
  //     <div className="installment">
  //       <span>or {product.installments} x</span>
  //       <b>
  //         {product.currencyFormat}
  //         {formatPrice(installmentPrice, product.currencyId)}
  //       </b>
  //     </div>
  //   );
  // }

  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-iconic={product.iconic}
    >
      
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products` + product.iconic)}
        alt={product.id_product}
      />
      <p className="shelf-item__title">{`${product.product_name} - ${product.product_name_2}`}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>R$</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {/* {productInstallment} */}
      </div>
      <div className="shelf-item__buy-btn">Adicionar</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
