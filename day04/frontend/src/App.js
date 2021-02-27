import React from "react";
import { Route } from "react-router-dom";
import { Home, About, Users, Login, Profile } from "./pages/AllPages";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} exact={true} />
      <Route path="/about/:name" component={About} />
      <Route path="/axios" component={Users} />
      <Route path="/login" component={Login} />
      <Route path="/profile/:name" component={Profile} />
    </div>
  );
}

export default App;
