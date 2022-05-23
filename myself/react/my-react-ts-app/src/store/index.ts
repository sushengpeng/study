/*
 * @Autor: flygg123
 * @Date: 2022-05-05 08:48:11
 * @LastEditTime: 2022-05-16 15:18:42
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { combineReducers, applyMiddleware, compose, Middleware, Reducer } from "redux";
import { legacy_createStore as createStore } from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IStoreState, IAction } from "./types";
import userReducer from "./module/user";
import projectReducer from "./module/project";
import widegtReducer from "./module/widget";
const reducers: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
    user: userReducer,
    project: projectReducer,
    widget: widegtReducer
});
const persistConfig = {
    key: 'root',
    storage: storage,
    // whitelist: ['user'] // 需要缓存的白名单,不设置则全部缓存
};
const myPersistReducer = persistReducer(persistConfig, reducers)
const middleware: Middleware[] = [reduxThunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(reduxLogger);
}
function createMyStore() {
    /* eslint-disable no-underscore-dangle */
    const store = window.__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(
            myPersistReducer,
            compose(
                applyMiddleware(...middleware),
                window.__REDUX_DEVTOOLS_EXTENSION__({})
            )
        )
        : createStore(myPersistReducer, applyMiddleware(...middleware));

    return store;
}

const store = createMyStore();
export const persistor = persistStore(store)
export default store;