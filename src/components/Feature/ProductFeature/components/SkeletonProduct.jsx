import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

SkeletonProduct.propTypes = {
    length: PropTypes.number,
};
SkeletonProduct.defaultProps = {
    length: 30,
};

function SkeletonProduct({ length }) {
    return (
        <Box sx={{ my: 5 }}>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index}>
                        <Box padding={1}>
                            <Skeleton variant="rect" width={230} height={180}></Skeleton>
                            <Skeleton width="70%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SkeletonProduct;
