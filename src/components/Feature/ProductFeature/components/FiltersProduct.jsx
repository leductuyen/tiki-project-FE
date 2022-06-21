import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

FiltersProduct.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object.isRequired,
};

function FiltersProduct({ onChange, filters }) {
    const handleFilterByCategoryChange = (newCategoryId) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            'category.id': newCategoryId,
        };
        onChange(newFilters);
    };
    const handleFilterByPrice = (values) => {
        console.log(values);
        if (onChange) {
            onChange(values);
        }
    };
    return (
        <div>
            <FilterByCategory onChange={handleFilterByCategoryChange} />
            <FilterByPrice onChange={handleFilterByPrice} />
        </div>
    );
}

export default FiltersProduct;
