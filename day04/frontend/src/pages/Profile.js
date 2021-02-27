import React from "react";
import Header from "../component/Header";

function Profile({ match }) {
  return (
    <div>
      <Header />
      <main className="w-full h-screen">
        <span className="my-3">안녕하세요 {match.params.name}</span>
      </main>
    </div>
  );
}

export default Profile;
