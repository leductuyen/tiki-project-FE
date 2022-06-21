import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './pages/ListPage';
import PropTypes from 'prop-types';
import DetailPage from './pages/DetailPage/DetailPage';
import CartFeature from './components/Cart';
ProductFeature.propTypes = {
    product: PropTypes.object,
};
function ProductFeature({ product }) {
    return (
        <div>
            <Switch>
                <Route path="/" component={ListPage} exact />
                <Route path="/detail/:detailId" component={DetailPage} exact />
                <Route path="/cart" component={CartFeature} exact />
            </Switch>
        </div>
    );
}

export default ProductFeature;
