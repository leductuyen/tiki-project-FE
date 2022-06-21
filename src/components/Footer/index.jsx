import React from 'react';
import Facebook from '../../Image/Facebook.png';
import Instagram from '../../Image/Instagram.png';
import ZaloPay from '../../Image/ZaloPay.png';
import Visa from '../../Image/Visa.png';
import Momo from '../../Image/Momo.png';
import VnPay from '../../Image/VnPay.png';
import Interest from '../../Image/Interest.png';
import Bank from '../../Image/Bank.png';
import Atm from '../../Image/Atm.png';

import Styles from './Footer.module.scss';

function Footer(props) {
    return (
        <footer className={Styles.Footer}>
            <div className={Styles.Styles}>
                <div className={Styles.Support}>
                    <h4>Hỗ trợ khách hàng</h4>
                    <h5>Hotline : 1900-6035</h5>
                    <h5>Phương thức vận chuyển</h5>
                    <h5>Chính sách đổi trả</h5>
                    <h5>Hỗ trợ khách hàng: hotro@tiki.vn</h5>
                    <h5>Báo lỗi bảo mật: security@tiki.vn</h5>
                </div>
                <div className={Styles.Support}>
                    <h4>Người thực hiện</h4>
                    <h5>Thi Lê</h5>
                    <h5>Huy Trần</h5>
                    <h5>Bùi Quốc Huy</h5>
                    <h5>Phan Thảo Hiền</h5>
                    <h5>Nguyễn Thị Nhân</h5>
                    <h5>Lê Đức Tuyền</h5>
                </div>
                <div className={Styles.Support}>
                    <h4>Thanh Toán</h4>
                    <p>
                        <img src={Visa} alt="" />
                        <img src={Momo} alt="" />
                    </p>
                    <p>
                        <img src={VnPay} alt="" />
                        <img src={Interest} alt="" />
                    </p>
                    <p>
                        <img src={Bank} alt="" />
                        <img src={Atm} alt="" />
                    </p>
                </div>
                <div className={Styles.Support}>
                    <h4>Kết nối với chúng tôi</h4>
                    <p>
                        <img src={Facebook} alt="" />
                        <img src={ZaloPay} alt="" />
                        <img src={Instagram} alt="" />
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
