<!--
 * @Autor: flygg123
 * @Date: 2022-04-27 20:21:42
 * @LastEditTime: 2022-05-08 20:03:03
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
- `yarn create vite my-react-ts-app --template react-ts`
- `npm i axios scss scss-loader antd -d `
- 在 `vite.config.ts` 中配置
- `redux-thunk`主要对异步运用中间件做一些处理，因为reducer应该是一个纯函数，不能有副作用，只能根据action对state进行更新，因此不能在此发出网络请求。
- `redux-logger`会在dispatch改变仓库状态的时候打印出旧的仓库状态、当前触发的action以及新的仓库状态
- `useCallback`减少了函数式参数不必要的更新，子组件收到的参数不变，自然也不会更新，从而减少了组件间不必要的更新，子组件中需要使用memo进行包裹，useCallback(fn,deps) 相当于 useMemo(()=>fn,deps)
- `useEffect` 是官方推荐拿来代替 `componentDidMount`/`componentDidUpdate`/`componentWillUnmount` 这三个生命周期函数的，但是它们并不是完全等价的，`useEffect` 是在浏览器渲染结束之后才执行的，而这三个生命周期函数是在浏览器渲染之前同步执行的，React 还有一个官方的 `hook` 是完美等价于这三个生命周期函数的，叫 `useLayoutEffect`
- `react-router-dom` 的v6 版本中若嵌套路由中需要默认展示的时候，首先需要在根路由中使用 `OutLet`（类似于vue中的`router-view`） ,其位置为子路由展示的位置，在router中需要配置`index`
- `redux-persist` 在触发`reducer`的时候返回需要使用`{ ...state }`的形式返回，否则新导入的数据无法持续化缓存到`storage`中