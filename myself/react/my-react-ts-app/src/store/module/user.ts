/*
 * @Autor: flygg123
 * @Date: 2022-05-05 08:48:18
 * @LastEditTime: 2022-05-06 22:52:24
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { Reducer } from 'redux';
import { IAction } from '../types';
import { getToken, setToken, removeToken } from '../../utils/cookie';
export interface UserState {
    token?: string;
    userInfo: {
        account: string,
        userId: string,
        userName: string
    }
}
const defaultUser: UserState = {
    token: "",
    userInfo: {
        account: "",
        userId: "",
        userName: ""
    }
};
export const setUserInfo: (user: UserState) => IAction<UserState> = (user: UserState) => ({
    type: 'SET_USER_INFO',
    payload: user,
});
export const logout: () => IAction<null> = () => ({
    type: 'SET_USER_LOGOUT',
    payload: null,
});
const userReducer: Reducer<UserState, IAction<any>> = (
    state = defaultUser,
    action: IAction<any>,
) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_USER_INFO':
            setToken(payload.token);
            return {
                ...payload,
            };
        case 'SET_USER_LOGOUT':
            removeToken();
            return {
                ...defaultUser,
            };
        default:
            return state;
    }
};

export default userReducer;