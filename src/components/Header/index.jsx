import React from 'react';
import { Badge, Box, IconButton } from '@material-ui/core';
import Styles from './Header.module.scss';
import Logo from '../../Image/logo.png';
import Search from '../../Image/search.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useState } from 'react';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { useSelector, useDispatch } from 'react-redux';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import { Menu, MenuItem } from '@material-ui/core';
import { logout } from './Auth/userSlice';
import { cartitemsCountSelector } from '../Feature/ProductFeature/components/Cart/selectors';
import { useHistory } from 'react-router-dom';
const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};
function Header(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const loggedInUser = useSelector((state) => state.user.current); // lấy thông tin user đăng nhập đã lưu, trong user slice
    const isLoggedIn = !!loggedInUser.id; // đã đăng nhập hoặc chưa đăng nhập
    const cartItemsCount = useSelector(cartitemsCountSelector);
    const [mode, setMode] = useState(MODE.LOGIN); // nút chuyển đổi qua lại giữa đăng nhập và đăng kí
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleLogOutClick = () => {
        const action = logout();
        dispatch(action);
    };
    const handleCartClick = () => {
        history.push('/cart');
    };
    return (
        <div className={Styles.Wrapper}>
            <div className={Styles.Header}>
                <div className={Styles.Middle}>
                    <div className={Styles.Logo}>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className={Styles.FormSearch}>
                        <div className={Styles.Search}>
                            <input className={Styles.Input} type="text" placeholder="Tìm kiếm sản phẩm"></input>
                            <button className={Styles.Button}>
                                <img src={Search} alt="serach" />
                                Tìm kiếm
                            </button>
                            <div className={Styles.User}>
                                <div className={Styles.Login}>
                                    {!isLoggedIn && (
                                        <Button color="inherit" onClick={handleClickOpen}>
                                            Login
                                        </Button>
                                    )}

                                    {isLoggedIn && (
                                        <IconButton color="inherit" onClick={handleUserClick}>
                                            <AccountCircle />
                                        </IconButton>
                                    )}
                                    <IconButton color="inherit" onClick={handleCartClick}>
                                        <Badge badgeContent={cartItemsCount} color="secondary">
                                            <ShoppingCart />
                                        </Badge>
                                    </IconButton>
                                    <Menu
                                        keepMounted
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        getContentAnchorEl={null}
                                    >
                                        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                                        <MenuItem onClick={handleLogOutClick}>Logout</MenuItem>
                                    </Menu>
                                    <Dialog
                                        open={open}
                                        aria-labelledby="form-dialog-title"
                                        disableBackdropClick
                                        disableEscapeKeyDown
                                    >
                                        <DialogContent>
                                            {mode === MODE.REGISTER && (
                                                <>
                                                    <Register closeDialog={handleClose} />
                                                    <Box textAlign="center">
                                                        <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                                            Login here
                                                        </Button>
                                                    </Box>
                                                </>
                                            )}
                                            {mode === MODE.LOGIN && (
                                                <>
                                                    <Login closeDialog={handleClose} />
                                                    <Box textAlign="center">
                                                        <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                                            Register here
                                                        </Button>
                                                    </Box>
                                                </>
                                            )}
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose}>
                                                Cancel
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
