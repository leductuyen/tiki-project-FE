import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../../api/user';
import StorageKeys from '../../../constants/storage-keys';
const { createSlice } = require('@reduxjs/toolkit');
// export const register = createAsyncThunk('user/register', async (payload) => {
//     // call api to register
//     const data = await userApi.register(payload);
//     // save data to local storge
//     localStorage.setItem('access_token', data.jwt);
//     localStorage.setItem('user', JSON.stringify(data.user));
//     // return user data
//     return data.user;
// });
// export const login = createAsyncThunk('user/login', async (payload) => {
//     // call api to register
//     const data = await userApi.login(payload);
//     // save data to local storge
//     localStorage.setItem(StorageKeys.TOKEN, data.jwt);
//     localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
//     // return user data
//     return data.user;
// });

// const userSlice = createSlice({
//     name: ' user',
//     initialState: {
//         current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, // thông tin login user, lưu thông tin user đã đăng nhập
//         settings: {},
//     },
//     reducers: {
//         logout(state, action) {
//             //clear local storage
//             localStorage.removeItem('access_token');
//             localStorage.removeItem('user');
//             // cập nhật state về {} rỗng
//             state.current = {}; // reset current lưu thông tin user về {} rỗng
//         },
//     }, // actions
//     extraReducers: {
//         'user/register/fullfilled': (state, action) => {
//             state.current = action.payload;
//         },
//         'user/login/fullfilled': (state, action) => {
//             state.current = action.payload;
//         },
//     },
// });

// const { reducer, actions } = userSlice;
// export const { logout } = actions;

// export default reducer;

export const register = createAsyncThunk('user/register', async (payload) => {
    const data = await userApi.register(payload);
    console.log('data', data);
    console.log('payload', payload);
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.User, JSON.stringify(data.user));
    return data.user;
});
export const login = createAsyncThunk('user/login', async (payload) => {
    const data = await userApi.login(payload);
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}, // khởi tạo redux state từ localStorage(dữ liệu của user)
        settings: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            //tính năng đăng xuất
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            state.current = {};
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
