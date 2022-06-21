import React, { useEffect } from 'react';

import { useRouteMatch } from 'react-router-dom';

import { useState } from 'react';
import ProductThumbnail from '../../components/ProductThumbnail';
import ProductInfo from '../../components/ProductInfo';
import Styles from './DetailPage.module.scss';
import AddToCartForm from '../../components/AddToCartForm';
import productApi from '../../../../../api/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../components/Cart/cartSlice';

DetailPage.propTypes = {};

function DetailPage(props) {
    const dispatch = useDispatch();
    const {
        params: { detailId },
    } = useRouteMatch();
    console.log(detailId);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await productApi.get(detailId);
                console.log({ result });
                setDetail(result);
            } catch (error) {
                console.log('Feild', error);
            }
        })();
    }, [detailId]);
    const handleAddtoCartForm = (formValues) => {
        console.log(formValues);
        const actions = addToCart({
            id: detail.id,
            detail,
            quantity: formValues.quantity,
        });
        console.log(actions);
        dispatch(actions);
    };
    return (
        <div className={Styles.Detail}>
            <div className={Styles.Left}>
                <ProductThumbnail product={detail} />
            </div>
            <div className={Styles.Center}></div>
            <div className={Styles.Right}>
                <ProductInfo product={detail} />
                <AddToCartForm onSubmit={handleAddtoCartForm} />
            </div>
        </div>
    );
}

export default DetailPage;
