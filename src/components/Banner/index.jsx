import React from 'react';
import Styles from './Banner.module.scss';
import Left from '../../Image/Left.png';
import Right from '../../Image/Right.png';
function Banner(props) {
    return (
        <div className={Styles.Banner}>
            <div className={Styles.Styles}>
                <div className={Styles.Left}>
                    <img src={Left} alt="" />
                </div>
                <div className={Styles.Right}>
                    <img src={Right} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
