import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import ExContents from "./routes/ExContents"
import Header from "./component/Header"

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <div>
          <Switch>
            <Route path="/" exact={true} component={ExContents} /> 
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;