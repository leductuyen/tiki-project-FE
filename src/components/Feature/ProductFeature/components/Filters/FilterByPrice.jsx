import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Box, makeStyles } from '@material-ui/core';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',

        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(1),

        '& > span ': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
}));
FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });
    const handlePriceSubmit = () => {
        if (onChange) {
            onChange(values);
        }
    };
    const handleChange = (e) => {
        e.persist();
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <Box className={classes.root}>
            <Box className={classes.range}>
                <TextField
                    variant="outlined"
                    size="small"
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handleChange}
                />
                <span>-</span>
                <TextField
                    variant="outlined"
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handleChange}
                    size="small"
                />
            </Box>
            <Button onClick={handlePriceSubmit} color="primary">
                Áp Dụng
            </Button>
        </Box>
    );
}

export default FilterByPrice;
