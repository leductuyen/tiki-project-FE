import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Controller } from 'react-hook-form';
PassWordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PassWordField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = !!errors[name];
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassWord = () => {
        setShowPassword((x) => !x);
    };
    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                as={OutlinedInput}
                id={name}
                type={showPassword ? 'text' : 'password'}
                label={label}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={toggleShowPassWord}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                disabled={disabled}
            />
            <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PassWordField;
