/*
 * @Autor: flygg123
 * @Date: 2022-05-05 09:04:49
 * @LastEditTime: 2022-05-05 09:04:50
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { UserState } from './module/user';
import { Project } from './module/project';

export interface IStoreState {
  user: UserState;
  project: Project
}

export interface IAction<T> {
  type: string;
  payload: T;
}
