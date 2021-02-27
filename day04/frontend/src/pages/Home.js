import React from "react";
import Header from "../component/Header";

function Home() {
  return (
    <div>
      <Header />
      <main className="w-full h-screen bg-gradient-to-r bg-gray-900 from-gray-700 flex justify-center items-center">
        <div className="flex items-baseline">
          <h1 className="text-9xl text-white stick">Hello</h1>
          <span className="noto-sans text-white stick">
            , 안녕? 난 홈이야 !
          </span>
        </div>
      </main>
    </div>
  );
}

export default Home;
