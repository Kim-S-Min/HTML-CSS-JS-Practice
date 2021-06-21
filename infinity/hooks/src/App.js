import React from 'react'
import { HashRouter, Route} from 'react-router-dom'; 
import ExContents from './routes/ExContents'
import Header from './component/section/Header'

function App() {
  return (
    <HashRouter>
      <Header/>
      <Route path="/" exact={true} component={ExContents} />
    </HashRouter>
  );
}

export default App;