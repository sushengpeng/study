import React from 'react';
// import MyNav from './components/MyNav'
import Compose from "./components/Compose"
function App() {
  // let list1 = ['首页1', '视频1', '其他1']
  // let list2 = ['首页2', '视频2', '其他2']
  return (
    <div>
      <Compose title="1111">
        <span>哈哈哈</span>
      </Compose>
      {/* <MyNav nav = { list1 }/>
      <MyNav nav = { list2 }/> */}
    </div>
  );
}

export default App;