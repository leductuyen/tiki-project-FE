import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Product from './Product';
ListProduct.propTypes = {
    data: PropTypes.array,
};
ListProduct.default = {
    data: [],
};

function ListProduct({ data }) {
    return (
        <Box sx={{ my: 5 }}>
            <Grid container>
                {data.map((product) => (
                    <Grid key={product.id}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ListProduct;
