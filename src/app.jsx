/*eslint react-hooks/exhaustive-deps:off*/
import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [show, setShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShow = () => {
    setShowFlag(!show); //!マークをif以外で使うと、true/falseを反転
  };

  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      show || setShowFlag(true);
    } else {
      show && setShowFlag(false);
    }
  }, [num]);

  // if (num % 3 === 0) {//ダメな奴　無限再レンダリングされる
  //   setShowFlag(true);
  // } else {
  //   setShowFlag(false);
  // }

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <ColorfulMessage color="green">にゅー</ColorfulMessage>
      <ColorfulMessage color="blue">しゃー</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <p>{num}</p>
      <button onClick={onClickSwitchShow}>on/off</button>
      {show && <p>(';')</p>}
    </>
  );
};

export default App;
