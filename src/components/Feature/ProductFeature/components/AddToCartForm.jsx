import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { Button } from '@material-ui/core';
import QuantityField from '../../../Form-controls/QunatityField';
import { Typography, Box, makeStyles } from '@material-ui/core';
AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    Typography: {
        fontSize: '15px',
        lineHeight: '1.6',
        marginTop: '15px',
    },
}));
function AddToCartForm({ onSubmit = null }) {
    const classes = useStyles();
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .min(1, 'Minimum value is 1')
            .required('Please enter quantity')
            .typeError('Please enter a number'),
    });
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
        form.reset();
    };
    const handleButton = () => {
        alert('Chọn Mua');
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Box>
                <Typography className={classes.Typography}>Số Lượng</Typography>
                <QuantityField name="quantity" label="" form={form} />
            </Box>
            <Button type="submit" variant="contained" color="secondary" fullWidth size="large" onClick={handleButton}>
                Chọn Mua
            </Button>
        </form>
    );
}

export default AddToCartForm;
