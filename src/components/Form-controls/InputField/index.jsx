// import React from 'react';
// import PropTypes from 'prop-types';
// import { TextField } from '@material-ui/core';
// import { Controller } from 'react-hook-form';

// InputField.propTypes = {
//     form: PropTypes.object.isRequired,
//     name: PropTypes.string.isRequired,

//     label: PropTypes.string,
//     disabled: PropTypes.bool,
// };

// function InputField(props) {
//     const { form, name, label, disabled } = props;
//     const { errors } = form;
//     const hasError = errors[name];

//     return (
//         <Controller
//             name={name}
//             control={form.control}
//             as={TextField}
//             fullWidth
//             label={label}
//             disabled={disabled}
//             error={!!hasError}
//             helperText={errors[name]?.message}
//             variant="outlined"
//             margin="normal"
//         />
//     );
// }

// export default InputField;

import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { name, form, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name];
    return (
        <Controller
            name={name}
            control={form.control}
            label={label}
            disabled={disabled}
            as={TextField}
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!hasError}
            helperText={errors[name]?.message}
        ></Controller>
    );
}

export default InputField;
