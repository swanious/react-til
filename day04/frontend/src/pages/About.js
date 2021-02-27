import React from "react";
import Header from "../component/Header";

function About({ match }) {
  return (
    <div>
      <Header />
      <main className="w-full h-screen">
        <h1>About {match.params.name}</h1>
      </main>
    </div>
  );
}

export default About;
