import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'; 
import ExContents from './routes/ExContents'
import Header from './component/Header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/" exact={true} component={ExContents} />
    </BrowserRouter>
  );
}

export default App;