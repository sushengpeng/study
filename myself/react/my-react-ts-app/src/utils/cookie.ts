/*
 * @Autor: flygg123
 * @Date: 2022-05-05 09:49:19
 * @LastEditTime: 2022-05-05 09:55:08
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import cookie from 'js-cookie';
import config from '../config';

export const setToken = (token: string) => cookie.set(config.TOKEN_KEY, token);

export const getToken: () => string = () => cookie.get(config.TOKEN_KEY) || '';

export const removeToken = () => cookie.remove(config.TOKEN_KEY);
