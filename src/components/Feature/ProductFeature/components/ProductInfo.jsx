import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ProductInfo.module.scss';
ProductInfo.propTypes = {
    product: PropTypes.object,
};

function ProductInfo({ product }) {
    const { name, originalPrice, salePrice, shortDescription, promotionPercent } = product;
    return (
        <div>
            <h2 className={Styles.Name}>{name}</h2>
            <h2 className={Styles.ShortDescription}>{shortDescription}</h2>
            <div className={Styles.Price}>
                <div className={Styles.SalePrice}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salePrice)}
                </div>
                <div className={Styles.OriginalPrice}>
                    <h2>{originalPrice}</h2>
                </div>
                <div className={Styles.PromotionPercent}>
                    {promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
