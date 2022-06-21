import React from 'react';
import Styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { cartitemsCountSelector, cartitemsIdSelector, cartitemsTotalSelector } from './selectors';

function CartFeature(props) {
    const cartTotal = useSelector(cartitemsTotalSelector);
    const cartCount = useSelector(cartitemsCountSelector);
    console.log('Count', cartCount);
    const cartItems = useSelector(cartitemsIdSelector);
    console.log('Id', cartItems);
    const handleButtonClick = () => {
        alert('Mua hang');
    };
    return (
        <div className={Styles.Cart}>
            <div className={Styles.Title}>
                <h4>Giỏ hàng</h4>
            </div>

            <div className={Styles.Content}>
                <div className={Styles.Left}>
                    <div className={Styles.Heading}>
                        <label>Tất cả ({cartCount} sản phẩm)</label>
                        <span>Đơn giá</span>
                        <span>Số lượng</span>
                        <span>Thành tiền</span>
                    </div>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <div className={Styles.Intended}>
                                <div className={Styles.NormalProduct}>
                                    <div className={Styles.Row}>
                                        <div className={Styles.Col1}>
                                            <h4>{item.detail.name}</h4>
                                            <span></span>
                                        </div>
                                        <div className={Styles.Col2}>
                                            <span>{item.detail.salePrice}</span>
                                        </div>
                                        <div className={Styles.Col3}>
                                            <span>{item.quantity}</span>
                                        </div>
                                        <div className={Styles.Col4}>
                                            <span>{item.detail.salePrice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
                <div className={Styles.Right}>
                    <div className={Styles.PriceSummary}>
                        <ul className={Styles.PriceItems}>
                            <li className={Styles.PriceItem}>
                                <span>Tạm Tính</span>
                                <span>{cartTotal}</span>
                            </li>
                        </ul>
                        <div className={Styles.PriceTotal}>
                            <span>Tổng Tiền</span>
                            <div className={Styles.PricesContent}>
                                <span className={Styles.Values}>{cartTotal}</span>
                                <span className={Styles.Noted}>(Đã bao gồm VAT)</span>
                            </div>
                        </div>
                    </div>
                    <button className={Styles.Button} onClick={handleButtonClick}>
                        Mua Hàng ({cartCount})
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartFeature;
