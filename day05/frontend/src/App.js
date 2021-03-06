import React from "react";
import { Route } from "react-router-dom";
import { Home, About, Todos } from "./pages/Wrap";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/todos" component={Todos} />
    </div>
  );
}

export default App;
