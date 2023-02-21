import React from "react";

function index() {
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  console.log(isTwoCNChar("是独"))
  let str = "是独";
  if(isTwoCNChar(str)) {
    console.log(str.split("").join(" "))
  }
  return <div>index</div>;
}

export default index;
