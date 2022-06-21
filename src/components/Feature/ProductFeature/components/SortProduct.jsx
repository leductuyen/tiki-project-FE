import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@material-ui/core';

SortProduct.propTypes = {
    onChange: PropTypes.func,
    Sort: PropTypes.string.isRequired,
};

function SortProduct({ onChange, Sort }) {
    const handleSortChange = (e, newValue) => {
        if (onChange) {
            onChange(newValue);
        }
    };
    return (
        <Tabs onChange={handleSortChange} value={Sort}>
            <Tab label="Giá thấp" value="salePrice:ASC"></Tab>
            <Tab label="Giá cao" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default SortProduct;
