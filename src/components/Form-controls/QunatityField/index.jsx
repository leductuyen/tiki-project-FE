import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
    OutlinedInput: {
        fontSize: '8px',
        margin: '15px 0',
    },
}));
function QuantityField(props) {
    const classes = useStyles();
    const { form, name, label, disabled } = props;
    const { errors, setValue } = form;
    const hasError = !!errors[name];

    return (
        <FormControl error={hasError}>
            <Typography>{label}</Typography>
            <Controller
                name={name}
                control={form.control}
                render={({ onChange, onBlur, value, name }) => (
                    <Box>
                        <IconButton
                            onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
                        >
                            <RemoveCircleOutline />
                        </IconButton>
                        <OutlinedInput
                            className={classes.OutlinedInput}
                            id={name}
                            type="number"
                            disabled={disabled}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <IconButton
                            onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
                        >
                            <AddCircleOutline />
                        </IconButton>
                    </Box>
                )}
            />
            <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;
