import React from 'react';

import Styles from './Category.module.scss';

function Category(props) {
    return (
        <div className={Styles.Category}>
            <div className={Styles.Container}>
                <div className={Styles.Slider}>
                    <a>Thịt, Rau củ</a>
                    <a>Bách Hóa</a>
                    <a>Nhà Cửa</a>
                    <a>Điện Tử</a>
                    <a>Thiết Bị Số</a>
                    <a>Điện Thoại</a>
                    <a>Mẹ & Bé</a>
                    <a>Làm Đẹp</a>
                    <a>Gia Dụng</a>
                    <a>Thời trang nữ</a>
                    <a>Thời trang nam</a>
                    <a>Giày nữ</a>
                    <a>Túi nữ</a>
                </div>
            </div>
        </div>
    );
}

export default Category;
