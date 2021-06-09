import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

/* HashRouter는 uri뒤에 #이 붙는 방면 github page에 업로드하기 편하고
BrowserRouter는 uri뒤에 #이 붙지 않지만 github page에 업로드하기 불편하다
둘중에 원하는걸로 해도 상관이 없다*/
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;