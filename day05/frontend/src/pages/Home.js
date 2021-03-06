import React from "react";

const Home = () => {
  const name = undefined;

  // 인라인 스타일의 경우 css처럼 `-`가 아닌, CamelCase로 사용합니다.
  const style = {
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, // 생략하면 px로 적용됩니다.
  };
  return (
    <div style={style}>
      {/* 데이터가 undefined일 때 보여줄 문구가 있다면 아래와 같이 사용할 수 있다. */}
      Home
      <div>{name || "리액트"}</div>
    </div>
  );
};

export default Home;
