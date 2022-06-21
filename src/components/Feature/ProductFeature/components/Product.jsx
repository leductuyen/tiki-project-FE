import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Product.module.scss';
import { useHistory } from 'react-router-dom';

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${product.thumbnail?.url}`
        : 'https://via.placeholder.com/250';
    const history = useHistory();
    const handleDetailPageClick = () => {
        history.push(`/detail/${product.id}`);
    };
    return (
        <div className={Styles.Home} onClick={handleDetailPageClick}>
            <div className={Styles.Content}>
                <span className={Styles.Span}>
                    <div>
                        <div className={Styles.Thumbnail}>
                            <img src={thumbnailUrl} alt="" height={230} width={250} />
                        </div>
                        <div className={Styles.Info}>{product.name}</div>
                        <div className={Styles.Price}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                product.salePrice,
                            )}

                            {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Product;
