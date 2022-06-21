import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import categoryApi from '../../../../../api/categoryApi';
import { useState } from 'react';
import Styles from './Filters.module.scss';
FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const data = await categoryApi.getAll();
                console.log({ data });
                setCategoryList(data);
            } catch (error) {
                console.log('Field', error);
            }
        })();
    }, []);
    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id);
        }
    };
    return (
        <div className={Styles.Sidebar}>
            <h4 className={Styles.Title}>Danh Mục Sản Phẩm</h4>
            <ul className={Styles.Category}>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <div className={Styles.CategoryName}>{category.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterByCategory;
