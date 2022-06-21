import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../Form-controls/InputField';
import { Button } from '@material-ui/core';
import PassWordField from '../../../Form-controls/PasswordField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinearProgress } from '@material-ui/core';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter yoru full name')
            .test('should has at least two words', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Please enter your email').email('Please enter a valid email address'),
        password: yup.string().required('Please enter your password').min(6, 'Please enter at lease 6 charaters'),
        retypePassword: yup
            .string()
            .required('Please enter your retype password')
            .oneOf([yup.ref('password')], 'Password the not match'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    const { isSubmitting } = form.formState;
    return (
        <div>
            {isSubmitting && <LinearProgress />}

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PassWordField name="password" label="Password" form={form} />
                <PassWordField name="retypePassword" label="Retype Password" form={form} />
                <Button disabled={isSubmitting} type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
