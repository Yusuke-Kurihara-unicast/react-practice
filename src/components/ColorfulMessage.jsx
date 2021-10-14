import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    color, //color:color(変数)の意味
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
