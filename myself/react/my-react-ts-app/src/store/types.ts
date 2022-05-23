/*
 * @Autor: flygg123
 * @Date: 2022-05-05 09:04:49
 * @LastEditTime: 2022-05-16 15:16:27
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { UserState } from './module/user';
import { Project } from './module/project';
import { WidgetState } from './module/widget';

export interface IStoreState {
  user: UserState
  project: Project
  widget: WidgetState
}

export interface IAction<T> {
  type: string;
  payload: T;
}
