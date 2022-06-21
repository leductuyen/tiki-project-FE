import React from 'react';
import PropTypes from 'prop-types';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    const thumbnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${product.thumbnail?.url}`
        : 'https://via.placeholder.com/250';
    return (
        <div>
            <img src={thumbnailUrl} alt={product.name}></img>
        </div>
    );
}

export default ProductThumbnail;
